import suntime from "./suntime.ts";
import { convertDecimalTime, timeDiff } from "./destime.ts";
/**
 * Calculates the sunrise, sunset, and daytime duration for a given latitude, longitude, and timezone.
 * --------
 *
 * @param {SuntimesOptions} options - The options for calculating the sunrise, sunset, and daytime duration.
 * @param {number} options.latitude - The latitude of the location. Latitude of location (South is negative).
 * @param {number} options.longitude - The longitude of the location. Longitude of location (West is negative).
 * @param {number} [options.timezone] - The timezone offset in hours. If not provided, the function uses the local timezone offset. Timezone hour offset. e.g. Pacific/Los Angeles Standard Time is -8 (Optional, defaults to system timezone).
 * @returns {SuntimesResult} - The sunrise, sunset, and daytime duration.
 * 
 * 
 * 
 * ```js
 * const options = {
    latitude: 34.0522,
    longitude: -118.2437,
    timezone: -8
      };
    const result = suntimes(options);
    console.log(result);
    // Output: { sunrise: "06:30:00 AM", sunset: "05:45:00 PM", daytime: "11:15:00" }
 * ```
 */
export function suntimes(options: SuntimesOptions): SuntimesResult {
  const { latitude, longitude, timezone } = options;
  const [sunriseDecimal, sunsetDecimal] = suntime(
    latitude,
    longitude,
    timezone
  );
  let sunrise: string;
  let sunset: string;
  let daytime: string;

  if (sunriseDecimal === null && sunsetDecimal === -1) {
    sunrise = "Never";
    sunset = "";
    daytime = "";
  } else if (sunriseDecimal === -1 && sunsetDecimal === null) {
    sunrise = "";
    sunset = "Never";
    daytime = "";
  } else if (sunriseDecimal !== null && sunsetDecimal !== null) {
    sunrise = convertDecimalTime(sunriseDecimal);
    sunset = convertDecimalTime(sunsetDecimal);
    daytime = timeDiff(sunriseDecimal, sunsetDecimal);
  } else {
    sunrise = "N/A";
    sunset = "N/A";
    daytime = "N/A";
  }

  return { sunrise, sunset, daytime };
}

export interface SuntimesOptions {
  latitude: number;
  longitude: number;
  timezone?: number;
}

export interface SuntimesResult {
  sunrise: string;
  sunset: string;
  daytime: string;
}
