export const GET_TRIPS = `
query getTripsByStatus(
  $select: TripSelectByStatus!
  $first: Int
  $offset: Int
  $orderBy: String
  $sort: String
) {
  getTripsByStatus(
    select: $select
    first: $first
    offset: $offset
    orderBy: $orderBy
    sort: $sort
  ) {
    total
    perPage
    page
    lastPage
    data {
      id
      internal_id
      external_id
      total_time
      total_distance
      datetime_start
      datetime_end
      load_type
      has_dangerous_load
      vehicles_fleet_code
      vehicles_license_plate
      max_occupation_percentage
      optimization_route_internal_id
      demand_internal_id
      demand_external_id
      ready
      started
      accepted
      completed
      finished
      created_at
      completed_at
      reject_reason
      route_polyline
      cost_center
      result_center
      customer_registration_code
      service_category
      exported_to_tms
      document_status
      document_created
      document_updated
      trip_stops {
        id
        type
        weight
        volume_m3
        event_timestamp
        estimate_departure
        estimated_service_time
        travel_time
        distance_next_stop
        service_point_name
        street
        number
        complement
        neighborhood
        city
        state
        zipcode
        latitude
        longitude
        is_start_location
        collected
        sequence
      }
      trip_documents {
        id
        type
        code
        content
        accepted
        reject_reason
        created_at
        updated_at
        signed_url
      }
      vehicles {
        composition {
          internal_id
          composition_type {
            name
          }
        }
      }
      driver {
        user {
          name
          avatar
        }
      }
      tag
    }
  }
}
`;
