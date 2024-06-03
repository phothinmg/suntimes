import { suntimes } from "../src/index";

describe("suntimes", () => {
  it(" for valid  latitude, longitude, and timezone return not N/A", () => {
    const latitude = 34.0522; // Los Angeles
    const longitude = -118.2437;
    const timezone = -8; // PST

    const result = suntimes({ latitude, longitude, timezone });

    expect(result.sunrise).not.toBe("N/A");
    expect(result.sunset).not.toBe("N/A");
    expect(result.daytime).not.toBe("N/A");
  });

  it("for valid  latitude, longitude, and timezone return values", () => {
    const options = {
      latitude: 34.051,
      longitude: -118.255,
      timezone: -7,
    };

    const result = suntimes(options);

    expect(result).toEqual({
      sunrise: "05:43:41 AM",
      sunset: "08:01:29 PM",
      daytime: "14:17:48",
    });
  });

  it("for accurate daytime duration in a leap year", () => {
    const options = {
      latitude: 40.7128,
      longitude: -74.006,
      timezone: -5,
    };

    const result = suntimes(options);

    expect(result.daytime).toMatch(/(\d{2}:\d{2}:\d{2})/);
  });
  it('use local timezone offset when timezone is not provided', () => {
    const options = {
      latitude: 19.76426959059103, // Naypyidaw Myanmar
      longitude: 96.0787901880646
    };

    const result = suntimes(options);

    expect(result).toEqual({
      sunrise: '05:27:29 AM',
      sunset: '06:43:01 PM',
      daytime: '13:15:31'
    });
  });

});
