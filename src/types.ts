export interface LocationState {
  country: string;
  city: string;
  street: string;
  number: string;
  longitude: string;
  latitude: string;
  elevation: string;
}

export interface ApiLocationState {
  data: {
    address: {
      country: string;
      city: string;
      street: string;
      number: string;
    };
    elevation: string;
    location: {
      longitude: string;
      latitude: string;
    };
  };
}

export interface EnvironmentState {
  temperature: string;
  humidity: string;
  pressure: string;
  pm1: string;
  pm25: string;
  pm10: string;
  caqi: string;
  level: string;
  description: string;
  advice: string;
  color: string;
}

export interface ApiEnvironmentState {
  data: {
    current: {
      indexes: ApiEnvironmentStateIndex[];
      values: ApiEnvironmentStateValue[];
    };
  };
}

interface ApiEnvironmentStateIndex {
  value: string;
  level: string;
  description: string;
  advice: string;
  color: string;
}

interface ApiEnvironmentStateValue {
  name: string;
  value: number;
}
