namespace Flights.ReadModels
{
    public record FlightRm(
        Guid Id,
        string Airlines,
        string Price,
        TimePlaceRm Departure,
        TimePlaceRm Arrival,
        int RemainingNumberOfSeats
        );
}
