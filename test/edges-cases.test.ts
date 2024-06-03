import { suntimes } from "../src/index";

describe("suntimes", () => {
  it("for  sun never set", () => {
    const options = {
      latitude: 71.2906, 
      longitude: -156.7886,
      timezone: -9,
    };

    const result = suntimes(options);

    expect(result).toEqual({
      sunrise: "",
      sunset: "Never",
      daytime: "",
    });
  });
  // it("for sun not rise", () => {
  //   const options = {
  //     latitude: 90, 
  //     longitude: 0,
  //     timezone: 0,
  //   };

  //   const result = suntimes(options);

  //   expect(result).toEqual({
  //     sunrise: "Never",
  //     sunset: "",
  //     daytime: "",
  //   });
  // });

  // it("midnight sun conditions when sun never sets", () => {
  //   const options = {
  //     latitude: 66.5039, // Arctic Circle latitude
  //     longitude: -23.7606,
  //     timezone: 0,
  //   };

  //   const result = suntimes(options);

  //   expect(result).toEqual({
  //     daytime: " 01:24:49",
  //     sunrise: "02:17:01 AM",
  //     sunset: "12:52:12 AM ",
  //   });
  // });
});
