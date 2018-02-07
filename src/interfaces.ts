export interface User {
    id: string;
    nickname: string;
}

export interface Device {
    id: string;
    name: string;
    temperature_offset: number;
    humidity_offset: number;
    created_at: string;
    updated_at: string;
    firmware_version: string;
    newest_events: DeviceNewestEvents;
}

export interface DeviceNewestEvents {
    te: {value: number, created_at: string};
    hu: {value: number, created_at: string};
}

export type DeviceCore = Device;

export interface Appliance {
    id: string;
    device: DeviceCore;
    model: Object | null;
    nickname: string;
    image: string;
    type: string; // Enum
    settings: AirConParams | null;
    aircon: AirCon | null;
    signals: Signal[];
}

export interface AirConHoge {
    id: string;
    device: DeviceCore;
    model: Object | null;
    nickname: string;
    image: string;
    type: string; // Enum
    settings: AirConParams | null;
    aircon: AirCon | null;
    signals: Signal[];
}

export interface ApplianceModel {
    id: string;
    manufacturer: string;
    remote_name: string;
    name: string;
    image: string;
}

export interface Signal {
    id: string;
    name: string;
    image: string;
}

export interface AirConParams {
    temp: string;
    mode: string; // Enum
    vol: string; // Enum
    dir: string; // Enum
    button: string; // Enum
}

export interface AirCon {
    range: {
        modes: {
            cool: AirConRangeMode;
            warm: AirConRangeMode;
            dry: AirConRangeMode;
            blow?: AirConRangeMode;
            auto?: AirConRangeMode;
        },
        fixedButtons: string; // Enum
    };
    tempUnit: string; // Enum
}

export interface AirConRangeMode {
    temp: string;
    vol: string; // Enum
    dir: string; // Enum
};

export interface Response<T> {
    statusCode: number;
    result: T;
}
