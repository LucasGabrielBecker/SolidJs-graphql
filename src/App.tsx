import { Component, For, Show } from 'solid-js';
import { createResource } from 'solid-js';
import { Trip } from './components/Trip';
import { GET_TRIPS } from './graphql/getTrips';
import { client } from './utils/graphqlClient';

const [trips] = createResource(() =>
  client
    .query(GET_TRIPS, {
      first: 40,
      offset: 0,
      select: {
        status: 'current_trips',
      },
    })
    .toPromise()
    .then(({ data }) => data.getTripsByStatus.data)
);
const App: Component = () => {
  return (
    <div class="p-4 bg-gray-100">
      <Show when={!trips.loading}>
        <For each={trips()} fallback={<span>No trip found</span>}>
          {(trip: any) => <Trip trip={trip} />}
        </For>
      </Show>
      <h2>hello world</h2>
    </div>
  );
};

export default App;
