interface daytimeProps {
    latitude: number;
    longitude: number;
    timezone: number;
}
/**
 * Calculates the sunrise, sunset, and daytime duration for a given latitude, longitude, and timezone.
 * --------
 *
 * The latitude of the location.Latitude of location (South is negative)
 *
 * The longitude of the location.Longitude of location (West is negative)
 *
 * The timezone offset in hours. If not provided, the function uses the local timezone offset.
 * Timezone hour offset. e.g. Pacific/Los Angeles Standard Time is -8 (Optional, defaults to system timezone)
 *
 */
declare function suntimes({ latitude, longitude, timezone }: daytimeProps): {
    sunrise: string;
    sunset: string;
    daytime: string;
};

export { type daytimeProps, suntimes };
