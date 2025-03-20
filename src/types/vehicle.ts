export interface Vehicle {
    id: string;
    brand: string;
    model: string;
    version: string;
    year: number;
    image: string;
    price: {
        amount: number;
        currency: string;
    };
    warranty: {
        vehicle: {
            years: number;
            kilometers: number;
        };
        battery: {
            years: number;
            kilometers: number;
        };
        paint: number; // years
        corrosion: number; // years
    };
    specs: {
        range: {
            wltp: number;
            unit: string;
        };
        battery: {
            capacity: {
                gross: number;
                net: number;
                unit: string;
            };
            type: string;
            architecture: string;
            cooling: string;
            heating: boolean;
            cellManufacturer: string;
            chemistry: string;
        };
        performance: {
            acceleration: {
                zeroToHundred: number;
                unit: string;
            };
            topSpeed: {
                value: number;
                unit: string;
            };
            power: {
                value: number;
                unit: string;
            };
            torque: {
                value: number;
                unit: string;
            };
            towingCapacity: {
                value: number;
                unit: string;
            };
            roofLoad: {
                value: number;
                unit: string;
            };
        };
        charging: {
            maxAC: {
                value: number;
                unit: string;
            };
            maxDC: {
                value: number;
                unit: string;
            };
            timeToCharge: {
                value: string;
                description: string;
            };
            port: {
                type: string[];
                location: string;
                dualPorts: boolean;
            };
            preconditioning: boolean;
            scheduling: boolean;
        };
        dimensions: {
            length: number;
            width: number;
            height: number;
            wheelbase: number;
            groundClearance: number;
            turningCircle: number;
            dragCoefficient: number;
            unit: string;
        };
        cargo: {
            trunk: {
                value: number;
                unit: string;
            };
            frunk?: {
                value: number;
                unit: string;
            };
        };
        tires: {
            front: string;
            rear: string;
        };
    };
    features: {
        heatPump: boolean;
        autopilot: boolean;
        vehicleToLoad: boolean;
        allWheelDrive: boolean;
        airSuspension: boolean;
        onePedalDriving: boolean;
        drivingModes: string[];
        regenerativeBrakingLevels: number;
        wirelessCharging: boolean;
        mobileApp: boolean;
        otaUpdates: boolean;
        displays: {
            main: {
                size: number;
                resolution: string;
            };
            instrument: {
                size: number;
                resolution: string;
            };
            hud?: {
                size: number;
                type: string;
            };
        };
        soundSystem: {
            brand: string;
            speakers: number;
            power: number;
        };
    };
    safety: {
        ncapRating: number;
        activeSafety: string[];
        cameras: number;
        sensors: {
            radar: number;
            ultrasonic: number;
            lidar: boolean;
        };
        autonomyLevel: number;
    };
    environmental: {
        productionCO2: number;
        recycledMaterials: number;
        veganInterior: boolean;
        carbonFootprint: number;
    };
    costs: {
        energyConsumption: {
            value: number;
            unit: string;
        };
        annualMaintenanceEstimate: {
            amount: number;
            currency: string;
        };
        insuranceCategory: string;
        depreciationRate: number;
    };
    colors: string[];
} 