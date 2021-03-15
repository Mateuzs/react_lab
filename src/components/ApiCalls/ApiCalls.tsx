import React, { useState } from "react";
import axios from "axios";

import {
  LocationState,
  EnvironmentState,
  ApiLocationState,
  ApiEnvironmentState,
} from "../../types";
import {
  locationStateLoading,
  environmentStateLoading,
  locationStateError,
  environmentStateError,
} from "../../constants";
import "./ApiCalls.scss";

const ApiCalls = () => {
  const [locationState, setLocationState] = useState<null | LocationState>(
    null
  );
  const [
    environmentState,
    setEnvironmentState,
  ] = useState<null | EnvironmentState>(null);

  const fetchLocationData = async (id: string) => {
    const urlLocationData = `https://airapi.airly.eu/v2/installations/${id}`;
    const urlEnvData = `https://airapi.airly.eu/v2/measurements/installation?installationId=${id}`;

    const headers = {
      Accept: "application/json",
      apiKey: "E4tqkikEeGi4Jqutm4MnwErPfhcvPVf0",
    };

    try {
      setLocationState(locationStateLoading);
      setEnvironmentState(environmentStateLoading);

      // eslint-disable-next-line
      const [locationData, envData] = await Promise.all([
        (axios.get(urlLocationData, {
          headers,
        }) as unknown) as ApiLocationState,
        (axios.get(urlEnvData, { headers }) as unknown) as ApiEnvironmentState,
        ,
      ]);
      console.log(locationData);

      setLocationState({
        country: locationData.data.address.country || "no data available",
        city: locationData.data.address.city || "no data available",
        street: locationData.data.address.street || "no data available",
        number: locationData.data.address.number || "no data available",
        elevation: locationData.data.elevation || "no data available",
        longitude: locationData.data.location.longitude || "no data available",
        latitude: locationData.data.location.latitude || "no data available",
      });

      setEnvironmentState({
        caqi: envData.data.current.indexes[0].value || "no data available",
        level: envData.data.current.indexes[0].level || "no data available",
        description:
          envData.data.current.indexes[0].description || "no data available",
        advice: envData.data.current.indexes[0].advice || "no data available",
        color: envData.data.current.indexes[0].color || "no data available",
        //@ts-ignore
        temperature: envData.data.current.values
          .find(({ name }) => name === "TEMPERATURE", {
            value: "no data available",
          })
          .value.toString(),
        //@ts-ignore
        humidity: envData.data.current.values
          .find(({ name }) => name === "HUMIDITY", {
            value: "no data available",
          })
          .value.toString(),
        //@ts-ignore
        pressure: envData.data.current.values
          .find(({ name }) => name === "PRESSURE", {
            value: "no data available",
          })
          .value.toString(),
        //@ts-ignore
        pm1: envData.data.current.values
          .find(({ name }) => name === "PM1", {
            value: "no data available",
          })
          .value.toString(),
        //@ts-ignore
        pm25: envData.data.current.values
          .find(({ name }) => name === "PM25", {
            value: "no data available",
          })
          .value.toString(),
        //@ts-ignore
        pm10: envData!.data.current.values
          .find(({ name }) => name === "PM10", {
            value: "no data available",
          })
          .value.toString(),
      });
    } catch (e) {
      console.log(e);
      setLocationState(locationStateError);
      setEnvironmentState(environmentStateError);
    }
  };

  return (
    <div className="api-calls-container">
      <h1 className="api-calls-header">Api Calls</h1>
      <span className="api-calls-description">
        This is and example of https api calls realisation to the server. It
        allows you to fetch current data about environment at given time. Using
        HTTPS protocol and SSL encryption, performs fast and safe remote
        communication.
        <br />
        <br />
        Communication is being done in real-time. All async operation are
        covered by proper error handling. Users is notified about downloading
        the data and about the error if occurs.
        <br />
        <br />
        Provided a 3 different locations in Poland to make comparison of air
        quality and another parameters measured.
      </span>
      <div className="button-container">
        <button
          className="button-fetcher"
          aria-label="location Krakow button"
          onClick={(e) => fetchLocationData("204")}
        >
          {" "}
          Fetch data about Krakow!{" "}
        </button>
        <button
          className="button-fetcher"
          aria-label="location Warsaw button"
          onClick={(e) => fetchLocationData("39528")}
        >
          {" "}
          Fetch data about Warsaw!{" "}
        </button>
        <button
          className="button-fetcher"
          aria-label="location Gdansk button"
          onClick={(e) => fetchLocationData("3432")}
        >
          {" "}
          Fetch data about Gdansk!{" "}
        </button>
      </div>
      <div className="info-container">
        <div className="info-block-wrapper">
          <span>{`country: ${
            locationState ? locationState.country : ""
          }`}</span>
          <span>{`city: ${locationState ? locationState.city : ""}`}</span>
          <span>{`street: ${locationState ? locationState.street : ""}`}</span>
          <span>{`number: ${locationState ? locationState.number : ""}`}</span>
          <span>{`longitude: ${
            locationState ? locationState.longitude : ""
          }`}</span>
          <span>{`latitude: ${
            locationState ? locationState.latitude : ""
          }`}</span>
          <span>{`elevation: ${
            locationState ? locationState.elevation : ""
          }`}</span>
        </div>
        <div className="info-block-wrapper">
          <span>
            {`
          temperature: ${environmentState ? environmentState.temperature : ""}`}
          </span>
          <span>
            {`
          humidity: ${environmentState ? environmentState.humidity : ""}`}
          </span>
          <span>
            {`
          pressure: ${environmentState ? environmentState.pressure : ""}`}
          </span>
          <span>{`PM1: ${environmentState ? environmentState.pm1 : ""}`}</span>
          <span>{`PM10: ${
            environmentState ? environmentState.pm10 : ""
          }`}</span>
          <span>{`PM25: ${
            environmentState ? environmentState.pm25 : ""
          }`}</span>

          <span>{`CAQI: ${
            environmentState ? environmentState.caqi : ""
          }`}</span>
          <span>{`LEVEL: ${
            environmentState ? environmentState.level : ""
          }`}</span>
          <span>
            {`description: ${
              environmentState ? environmentState.description : ""
            }`}
          </span>
          <span>{`advice: ${
            environmentState ? environmentState.advice : ""
          }`}</span>
          <span className="color-wrapper">
            color:{" "}
            <div
              className="color-flag"
              style={
                environmentState
                  ? { background: environmentState.color }
                  : { background: "white" }
              }
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ApiCalls;
