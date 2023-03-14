import { TooltipProps } from 'recharts';

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<string | number, string>) => {
  return (
    <>
      {active && payload ? (
        <div
          className="custom-tooltip"
          style={{ background: '#FFF', padding: '1px 0px' }}
        >
          <p className="label">{`${label} : ${payload?.[0].value}`}</p>
          <ul className="desc">
            <li>{`id: ${payload[0].payload.id}`}</li>
            <li>{`value_area: ${payload[0].payload.value_area}`}</li>
            <li>{`value_bar: ${payload[0].payload.value_bar}`}</li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default CustomTooltip;
