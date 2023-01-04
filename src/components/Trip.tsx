import { createSignal } from 'solid-js';

export function Trip({ trip }: { trip: any }) {
  const [open, setOpen] = createSignal(false);
  const toggle = () => setOpen(!open());
  const id = trip.internal_id;
  const ext = trip.demand_external_id;
  const placa = trip.vehicles_fleet_code[0];
  const rota = trip.trip_stops[0].service_point_name;
  const kmTotal = `${trip.total_distance} km`;
  const tempoTotal = trip.total_time;
  const inicio = trip.datetime_start;
  const fim = trip.datetime_end;
  const motorista = trip.driver.user.name;
  return (
    <div class="w-full bg-white rounded-md my-4 h-[174px] text-[#525966] p-4 border border-gray-100 drop-shadow-sm">
      <div class="flex justify-between align-center">
        <div>
          <h4>id: {id}</h4>
          <h4>(ext: {ext})</h4>
        </div>

        <div class="flex">
          <span class=" bg-white rounded-md text-center py-2 px-4 text-sm border border-gray-300 mr-4">
            {placa}
          </span>
          <button onclick={toggle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class={`w-6 h-6 cursor-pointer ${open() ? 'rotate-90' : ''}`}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-6 mt-2">
        <Item label="Rota" value={rota} />
        <Item label="Km Total" value={kmTotal} />
        <Item label="Tempo total" value={tempoTotal} />
        <Item label="Início" value={inicio} />
        <Item label="Fim" value={fim} />
        <Item label="Motorista" value={motorista} />
      </div>
    </div>
  );
}

const Item = ({ label, value }: { label: string; value: string }) => (
  <div>
    <h5 class="text-[#758294]">{label}</h5>
    <h5>{value}</h5>
  </div>
);
