import React from 'react';
import { ServiceLevelCurrency } from 'karrio/graphql';
import SelectField from './generic/select-field';
import { CURRENCY_OPTIONS, ServiceLevelType } from '@/lib/types';
import InputField from './generic/input-field';
import { snakeCase } from '@/lib/helper';

interface CarrierServiceEditorProps {
  carrierName: string;
  defaultValue: ServiceLevelType[];
  onChange: (services: ServiceLevelType[]) => void;
}


const CarrierServiceEditor: React.FC<CarrierServiceEditorProps> = ({ carrierName, defaultValue, onChange }) => {
  const [expand, setExpand] = React.useState<boolean>(false);
  const [currency, setCurrency] = React.useState<ServiceLevelCurrency>(
    ((defaultValue || []).length > 0 && defaultValue[0].currency as ServiceLevelCurrency) || ServiceLevelCurrency.USD
  );
  const [services, setServices] = React.useState<ServiceLevelType[]>(defaultValue);

  const onClick = (e: React.MouseEvent<HTMLInputElement>) => e.currentTarget.select();
  const updateService = (index: number, data: any) => {
    const newServices = [...services];
    newServices[index] = { ...newServices[index], ...data };
    setServices(newServices);
    onChange(newServices);
  };
  const updateCurrency = (currency: ServiceLevelCurrency) => {
    const newServices = services.map(service => ({ ...service, currency }));
    setServices(newServices);
    setCurrency(currency);
    onChange(newServices);
  };

  return (
    <article className="panel is-white is-shadowless mt-5" style={{ border: "1px #ddd solid" }}>
      <p className="panel-heading select is-fullwidth px-2 pt-3" onClick={() => setExpand(!expand)}>
        <span className="is-size-6">Carrier Service Level Configuration</span>
      </p>

      <p className="is-size-7 my-1 has-text-weight-semibold has-text-grey px-2">
        Please adjust the cost of each service level negotiated with your carrier.
      </p>

      {expand && <>

        <div className="panel-block is-justify-content-right">
          <SelectField
            onChange={e => updateCurrency(e.target.value as ServiceLevelCurrency)}
            value={currency}
            name="currency"
            className="is-small is-fullwidth">
            {CURRENCY_OPTIONS.map(unit => <option key={unit} value={unit}>{unit}</option>)}
          </SelectField>
        </div>

        {(defaultValue || []).map((service_level: ServiceLevelType, index) => (
          <div key={index} className="panel-block is-justify-content-space-between">
            <InputField
              defaultValue={service_level.service_name || 'standard'}
              onChange={e => updateService(index, {
                service_name: e.target.value,
                service_code: snakeCase(`${carrierName} ${e.target.value}`)
              })}
              className="is-small"
            />

            <div className="field has-addons has-addons-right">
              <p className="control">
                <input
                  type="number" step="any" min="0"
                  className="input is-small"
                  defaultValue={service_level.cost || 0.0}
                  onClick={onClick}
                  onChange={e => updateService(index, {cost: Number.parseFloat(e.target.value || "0.0")})}
                />
              </p>
              <p className="control">
                <a className="button is-small is-static">{currency}</a>
              </p>
            </div>
          </div>
        ))}

      </>}
    </article>
  );
};

export default CarrierServiceEditor;
