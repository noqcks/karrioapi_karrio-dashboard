import { Organizations, OrganizationType } from '@/context/organizations-provider';
import { TokenData } from '@/context/token-provider';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Loading } from '@/components/loader';
import Image from 'next/image';
import { isNone } from '@/lib/helper';


const OrganizationDropdown: React.FC = () => {
  const btn = useRef<HTMLButtonElement>(null);
  const { authenticateOrg, ...token } = useContext(TokenData);
  const { load, organizations, organization, loading, called } = useContext(Organizations);
  const { setLoading } = useContext(Loading);
  const [active, setActive] = useState<boolean>(false);
  const [selected, setSelected] = useState<OrganizationType>();

  const handleOnClick = (e: React.MouseEvent) => {
    if (!active) {
      setActive(true);
      document.addEventListener('click', onBodyClick);
    }
    e.stopPropagation();
  };
  const onBodyClick = (e: MouseEvent) => {
    if (e.target !== btn.current) {
      setActive(false);
      document.removeEventListener('click', onBodyClick);
    }
  };
  const select = (org: OrganizationType) => async (e: any) => {
    if (!active) {
      setActive(true);
      document.addEventListener('click', onBodyClick);
    }
    e.preventDefault();
    e.stopPropagation();

    if (org.id === selected?.id) return;
    setLoading(true);
    setSelected(org);
    authenticateOrg(org.id).then(() => setLoading(false));
    setActive(false);
  };
  const checkTokenChange = useCallback((key?: string) => {
    if (called && !isNone(key) && !token.loading && (selected?.token !== key)) {
      load();
    }
  }, [called, selected, token, load]);

  useEffect(() => { setSelected(organization); }, [organization]);
  useEffect(() => { (!called && !loading && load) && load(); }, [called, loading, load]);
  useEffect(() => { checkTokenChange(token?.token?.key) }, [token, checkTokenChange]);

  return (
    <>
      {((organizations || []).length > 0) && <div className={`dropdown ${active ? 'is-active' : ''}`}>
        <div className="dropdown-trigger">
          <button className="button is-light" aria-haspopup="true" aria-controls="dropdown-menu" onClick={handleOnClick} ref={btn}>
            <i className="fas fa-store"></i>
            <span className="px-3">{selected?.name}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            {(organizations || []).map(org => (
              <a key={org.id} className={`dropdown-item ${(org.id === selected?.id) ? 'is-active' : ''}`} onClick={select(org)}>
                <i className="fas fa-store"></i>
                <span className="px-2">{org.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>}

      {(!loading && (organizations || []).length === 0) &&
        <Image src="/icon.svg" className="mt-2" width="70" height="100%" alt="logo" />}
    </>
  );
};

export default OrganizationDropdown;
