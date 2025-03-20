'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Vehicle } from '@/types/vehicle';
import vehiclesData from '@/content/vehicles.json';
import { CarFront, ChevronLeft, ChevronRight } from 'lucide-react';
import { TagChip } from '@/components/TagChip';

export default function ComparisonPage() {
    const [selectedVehicles, setSelectedVehicles] = useState<[string?, string?]>([]);
    const vehicles = vehiclesData.vehicles as Vehicle[];

    const selectedVehicleData = selectedVehicles.map(id =>
        vehicles.find(v => v.id === id)
    );

    const handleVehicleSelect = (position: 0 | 1) => (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;
        setSelectedVehicles(prev => {
            const newSelection = [...prev];
            newSelection[position] = newValue === '' ? undefined : newValue;
            return newSelection as [string?, string?];
        });
    };

    const scrollContainer = (direction: 'left' | 'right') => {
        const container = document.getElementById('comparison-container');
        if (container) {
            const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="py-8">
            <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Araç Karşılaştırma</h1>

            {/* Vehicle Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[0, 1].map((position) => (
                    <div key={position} className="relative">
                        <label
                            htmlFor={`vehicle-${position}`}
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                            {position === 0 ? "Birinci Araç" : "İkinci Araç"}
                        </label>
                        <div className="relative">
                            <CarFront className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <select
                                id={`vehicle-${position}`}
                                value={selectedVehicles[position] || ''}
                                onChange={handleVehicleSelect(position as 0 | 1)}
                                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg appearance-none cursor-pointer hover:border-emerald-500 dark:hover:border-emerald-500 transition-colors focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500"
                            >
                                <option value="">Araç Seçin</option>
                                {vehicles.map(vehicle => (
                                    <option
                                        key={vehicle.id}
                                        value={vehicle.id}
                                        disabled={selectedVehicles.includes(vehicle.id) && selectedVehicles[position] !== vehicle.id}
                                        className="py-2"
                                    >
                                        {vehicle.brand} {vehicle.model} {vehicle.version}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Comparison Table */}
            {selectedVehicleData.some(v => v) && (
                <div className="overflow-x-auto pb-6">
                    <table className="w-full min-w-[768px] border-collapse bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-700">
                                <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900 dark:text-white border-b dark:border-gray-600">
                                    Özellikler
                                </th>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <th key={index} className="py-4 px-6 text-left text-sm font-semibold text-gray-900 dark:text-white border-b dark:border-gray-600">
                                        {vehicle ? (
                                            <div className="space-y-1">
                                                <p className="text-lg font-bold">{vehicle.brand} {vehicle.model}</p>
                                                <div className="text-emerald-600 dark:text-emerald-400">
                                                    <TagChip tag={`${vehicle.price.amount.toLocaleString('tr-TR')} ${vehicle.price.currency}`} className="bg-green-500 text-white" />
                                                </div>
                                            </div>
                                        ) : (
                                            "Araç seçilmedi"
                                        )}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Menzil (WLTP)
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? `${vehicle.specs.range.wltp} ${vehicle.specs.range.unit}` : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Batarya Tipi
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? vehicle.specs.battery.type : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Batarya Kapasitesi
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? (
                                            vehicle.specs.battery.capacity.gross ?
                                                `${vehicle.specs.battery.capacity.gross} kWh (Brüt) / ${vehicle.specs.battery.capacity.net} kWh (Net)` :
                                                `${vehicle.specs.battery.capacity.gross} kWh (Brüt)`
                                        ) : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Batarya Detayları
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? (
                                            vehicle.specs.battery.cooling ?
                                                `${vehicle.specs.battery.type}, ${vehicle.specs.battery.cooling} soğutma${vehicle.specs.battery.heating ? ', ısıtma sistemi' : ''}` :
                                                vehicle.specs.battery.type
                                        ) : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Batarya Teknolojisi
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? `${vehicle.specs.battery.architecture}` : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    AC Şarj (Max)
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? `${vehicle.specs.charging.maxAC.value} ${vehicle.specs.charging.maxAC.unit}` : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    DC Şarj (Max)
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? `${vehicle.specs.charging.maxDC.value} ${vehicle.specs.charging.maxDC.unit}` : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Şarj Süresi
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? `${vehicle.specs.charging.timeToCharge.value} dk (${vehicle.specs.charging.timeToCharge.description})` : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Boyutlar (U/G/Y)
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? `${vehicle.specs.dimensions.length}/${vehicle.specs.dimensions.width}/${vehicle.specs.dimensions.height} ${vehicle.specs.dimensions.unit}` : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Aks Mesafesi
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? `${vehicle.specs.dimensions.wheelbase} ${vehicle.specs.dimensions.unit}` : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Bagaj Hacmi
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? (
                                            vehicle.specs.cargo.frunk
                                                ? `${vehicle.specs.cargo.trunk.value + vehicle.specs.cargo.frunk.value} ${vehicle.specs.cargo.trunk.unit} (Bagaj: ${vehicle.specs.cargo.trunk.value}, Frunk: ${vehicle.specs.cargo.frunk.value})`
                                                : `${vehicle.specs.cargo.trunk.value} ${vehicle.specs.cargo.trunk.unit}`
                                        ) : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Isı Pompası
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? (
                                            <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${vehicle.features.heatPump ? "bg-emerald-500" : "bg-red-500"
                                                }`}>
                                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    {vehicle.features.heatPump ? (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    ) : (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    )}
                                                </svg>
                                            </span>
                                        ) : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Otopilot
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? (
                                            <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${vehicle.features.autopilot ? "bg-emerald-500" : "bg-red-500"
                                                }`}>
                                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    {vehicle.features.autopilot ? (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    ) : (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    )}
                                                </svg>
                                            </span>
                                        ) : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    V2L
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? (
                                            <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${vehicle.features.vehicleToLoad ? "bg-emerald-500" : "bg-red-500"
                                                }`}>
                                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    {vehicle.features.vehicleToLoad ? (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    ) : (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    )}
                                                </svg>
                                            </span>
                                        ) : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Dört Çeker
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? (
                                            <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${vehicle.features.allWheelDrive ? "bg-emerald-500" : "bg-red-500"
                                                }`}>
                                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    {vehicle.features.allWheelDrive ? (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    ) : (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    )}
                                                </svg>
                                            </span>
                                        ) : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    0-100 km/s
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? `${vehicle.specs.performance.acceleration.zeroToHundred} ${vehicle.specs.performance.acceleration.unit}` : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Maksimum Güç
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? `${vehicle.specs.performance.power.value} ${vehicle.specs.performance.power.unit}` : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Maksimum Hız
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle ? `${vehicle.specs.performance.topSpeed.value} ${vehicle.specs.performance.topSpeed.unit}` : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Tork
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle?.specs.performance.torque ?
                                            `${vehicle.specs.performance.torque.value} ${vehicle.specs.performance.torque.unit}` : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Çekiş Kapasitesi
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle?.specs.performance.towingCapacity ?
                                            `${vehicle.specs.performance.towingCapacity.value} ${vehicle.specs.performance.towingCapacity.unit}` : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Şarj Portu
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle?.specs.charging.port ?
                                            `${vehicle.specs.charging.port.type.join(', ')}${vehicle.specs.charging.port.dualPorts ? ' (Çift Port)' : ''}` : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Sürüş Modları
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle?.features.drivingModes ?
                                            vehicle.features.drivingModes.join(', ') : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Rejeneratif Frenleme
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle?.features.regenerativeBrakingLevels ?
                                            `${vehicle.features.regenerativeBrakingLevels} Seviye` : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Ekranlar
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle?.features.displays ? (
                                            <>
                                                {`Ana: ${vehicle.features.displays.main.size}"`}
                                                {vehicle.features.displays.instrument.size > 0 &&
                                                    `, Gösterge: ${vehicle.features.displays.instrument.size}"`}
                                                {vehicle.features.displays.hud &&
                                                    `, HUD: ${vehicle.features.displays.hud.size}"`}
                                            </>
                                        ) : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Ses Sistemi
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle?.features.soundSystem ?
                                            `${vehicle.features.soundSystem.brand}, ${vehicle.features.soundSystem.speakers} hoparlör, ${vehicle.features.soundSystem.power}W` : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Güvenlik
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle?.safety ? (
                                            <>
                                                {`Euro NCAP: ${vehicle.safety.ncapRating} yıldız`}
                                                <br />
                                                {`${vehicle.safety.cameras} kamera`}
                                                {vehicle.safety.sensors &&
                                                    `, ${vehicle.safety.sensors.radar} radar, ${vehicle.safety.sensors.ultrasonic} ultrasonik sensör`}
                                            </>
                                        ) : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Enerji Tüketimi
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle?.costs?.energyConsumption ?
                                            `${vehicle.costs.energyConsumption.value} ${vehicle.costs.energyConsumption.unit}` : "-"}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 text-sm font-medium text-gray-900 dark:text-white">
                                    Garanti
                                </td>
                                {selectedVehicleData.map((vehicle, index) => (
                                    <td key={index} className="py-4 px-6 text-sm text-gray-700 dark:text-gray-300">
                                        {vehicle?.warranty ? (
                                            <>
                                                {`Araç: ${vehicle.warranty.vehicle.years} yıl / ${vehicle.warranty.vehicle.kilometers.toLocaleString()} km`}
                                                <br />
                                                {`Batarya: ${vehicle.warranty.battery.years} yıl / ${vehicle.warranty.battery.kilometers.toLocaleString()} km`}
                                            </>
                                        ) : "-"}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            <style jsx global>{`
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
} 