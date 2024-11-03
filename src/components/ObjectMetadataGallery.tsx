'use client';

import React, { useState } from 'react';

// Type definitions
type MetadataValue = string | number | MetadataObject;
type MetadataObject = {
  [key: string]: MetadataValue;
};

interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
}

interface ObjectStyle {
  width: string;
  height: string;
  marginLeft: string;
  marginTop: string;
}

interface ObjectData {
  name: string;
  image: string;
  type: string;
  style: ObjectStyle;
  data: MetadataObject;
}

interface ObjectCardProps {
    object: ObjectData;
    isSelected: boolean;
    onSelect: () => void;
  }

interface MetadataRendererProps {
  data: MetadataValue;
  indent?: number;
}

// Toggle component
const Toggle = ({ isOn, onToggle }: ToggleProps) => (
  <button
    onClick={onToggle}
    className={`
      px-4 py-2 rounded-full text-sm font-medium
      transition-colors duration-200
      ${isOn 
        ? 'bg-gray-800 text-white' 
        : 'bg-gray-200 text-gray-800'
      }
    `}
  >
    {isOn ? 'Unconventional' : 'Conventional'}
  </button>
);

// Original conventional metadata
const CONVENTIONAL_METADATA: Record<string, ObjectData> = {
    runningShoes: {
      name: "Running Shoes",
      image: "/images/Img2.png",
      type: "footwear",
      style: {
        width: "50%",
        height: "50%",
        marginLeft: "15%",
        marginTop: "50px"
      },
      data: {
        totalDistance: "842km",
        manufacturerData: {
          leftOutsole: "68%",
          remaining: "72%"
        },
        usageMetrics: {
          totalSteps: "1,245,000",
          averagePace: "5.2km/h",
          terrainTypes: {
            pavement: "65%",
            grass: "20%",
            track: "15%"
          }
        },
        environmentalExposure: {
          rainDays: 28,
          mudExposure: "12 hours",
          temperature: "-2°C to 35°C"
        }
      }
    },
    waterBottle: {
      name: "Water Bottle",
      image: "/images/Img1.png",
      type: "hydration",
      style: {
        width: "30%",
        height: "30%",
        marginLeft: "60%",
        marginTop: "-150px"
      },
      data: {
        hydrationMetrics: {
          totalRefills: 624,
          averageDailyConsumption: "1.8L",
          peakUsageTime: "14:00-16:00"
        },
        temperatureData: {
          coldRetention: "18 hours",
          hotRetention: "12 hours",
          optimalTemp: "16°C"
        }
      }
    },
    backpack: {
      name: "Backpack",
      image: "/images/Img3.png",
      type: "storage",
      style: {
        width: "40%",
        height: "40%",
        marginLeft: "25%",
        marginTop: "75px"
      },
      data: {
        capacityMetrics: {
          volumeUsed: "28L",
          weightCapacity: "15kg",
          compartmentUsage: {
            main: "85%",
            front: "60%",
            side: "40%"
          }
        },
        durabilityStats: {
          strainPoints: "shoulder straps",
          waterResistance: "IPX4",
          zipperLife: "2000 cycles"
        }
      }
    },
    headphones: {
      name: "Wireless Headphones",
      image: "/images/Img4.png",
      type: "electronics",
      style: {
        width: "35%",
        height: "35%",
        marginLeft: "45%",
        marginTop: "120px"
      },
      data: {
        batteryMetrics: {
          totalPlaytime: "2460 hours",
          chargeCycles: 342,
          batteryHealth: "92%"
        },
        audioStats: {
          frequencyResponse: "20Hz-20kHz",
          noiseReduction: "-25dB",
          bluetoothRange: "10m"
        }
      }
    },
    desk: {
      name: "Standing Desk",
      image: "/images/Img5.png",
      type: "furniture",
      style: {
        width: "50%",
        height: "50%",
        marginLeft: "20%",
        marginTop: "30px"
      },
      data: {
        usagePatterns: {
          heightAdjustments: 1240,
          standingHours: "685",
          sittingHours: "1250"
        },
        loadData: {
          currentWeight: "32kg",
          maxCapacity: "70kg",
          weightDistribution: "balanced"
        }
      }
    },
    smartWatch: {
      name: "Smart Watch",
      image: "/images/Img6.png",
      type: "wearable",
      style: {
        width: "25%",
        height: "25%",
        marginLeft: "70%",
        marginTop: "90px"
      },
      data: {
        healthMetrics: {
          stepsTracked: "4,856,000",
          heartbeatReadings: "525,600",
          sleepHours: "2,920"
        },
        deviceStats: {
          screenTime: "960 hours",
          notifications: "15,340",
          appUsage: {
            fitness: "45%",
            notifications: "30%",
            other: "25%"
          }
        }
      }
    },
    plant: {
      name: "Desktop Plant",
      image: "/images/Img7.png",
      type: "decoration",
      style: {
        width: "45%",
        height: "45%",
        marginLeft: "10%",
        marginTop: "60px"
      },
      data: {
        growthMetrics: {
          heightGain: "15cm",
          newLeaves: 24,
          wateringSchedule: "7 days"
        },
        environmentData: {
          lightExposure: "6 hours/day",
          humidity: "45-55%",
          soilMoisture: "optimal"
        }
      }
    },
    mouse: {
      name: "Computer Mouse",
      image: "/images/Img8.png",
      type: "peripheral",
      style: {
        width: "45%",
        height: "45%",
        marginLeft: "55%",
        marginTop: "40px"
      },
      data: {
        usageStats: {
          clickCount: "845,000",
          scrollDistance: "42,600m",
          dragActions: "156,000"
        },
        performanceMetrics: {
          sensitivity: "1600 DPI",
          responseTime: "1ms",
          wirelessRange: "10m"
        }
      }
    },
    chair: {
      name: "Office Chair",
      image: "/images/Img9.png",
      type: "furniture",
      style: {
        width: "40%",
        height: "40%",
        marginLeft: "30%",
        marginTop: "80px"
      },
      data: {
        usageMetrics: {
          sittingHours: "2,850",
          adjustments: "1,240",
          reclineCount: "3,650"
        },
        maintenanceData: {
          wheelCondition: "85%",
          cushionCompression: "15%",
          frameDurability: "95%"
        }
      }
    },
    mug: {
      name: "Coffee Mug",
      image: "/images/Img10.png",
      type: "container",
      style: {
        width: "40%",
        height: "40%",
        marginLeft: "75%",
        marginTop: "110px"
      },
      data: {
        usageStats: {
          refills: "1,240",
          beverageTypes: {
            coffee: "75%",
            tea: "20%",
            other: "5%"
          }
        },
        thermalPerformance: {
          heatRetention: "45 minutes",
          optimalTemp: "65°C",
          cooldownRate: "0.5°C/min"
        }
      }
    }
  };
  
  const UNCONVENTIONAL_METADATA: Record<string, ObjectData> = {
    runningShoes: {
      ...CONVENTIONAL_METADATA.runningShoes,
      data: {
        squishiness: "7/10 when new, 3/10 after 300 miles",
        smellIntensity: "Detectable from 30cm away",
        socialStatus: {
          brandPrestige: "High",
          peakCoolnessPeriod: "First 2 months"
        },
        quirks: {
          laceUntying: "2-3 times per 10k",
          dogAttraction: "Medium",
          puddleSplashRadius: "0.8m"
        }
      }
    },
    waterBottle: {
      ...CONVENTIONAL_METADATA.waterBottle,
      data: {
        socialDynamics: {
          lendingReluctance: "Very high",
          conversationStarter: "Medium",
          aestheticAppeal: "8/10"
        },
        quirks: {
          rollAwayFrequency: "2-3 times per week",
          iceCubeRattling: "Moderately annoying",
          capLossProbability: "25% per year"
        }
      }
    },
    backpack: {
      ...CONVENTIONAL_METADATA.backpack,
      data: {
        personalityTraits: {
          packRatTendency: "High",
          bottomlessness: "Occasional",
          snackHoarding: "Chronic"
        },
        quirks: {
          mysteriousItems: "3-5 per month",
          pocketTimeWarp: "Items from 2+ years ago",
          zipperPersonality: "Stubborn on Mondays"
        }
      }
    },
    headphones: {
      ...CONVENTIONAL_METADATA.headphones,
      data: {
        socialImpact: {
          universalDoNotDisturb: "85% effective",
          dancingUrges: "432 suppressed",
          awkwardSingingIncidents: "26"
        },
        quirks: {
          tanglingAbility: "Expert level",
          disappearingAct: "4 times per month",
          earwaxCollection: "Concerning"
        }
      }
    },
    desk: {
      ...CONVENTIONAL_METADATA.desk,
      data: {
        clutterMetrics: {
          coffeeRingCount: "Daily average: 3",
          paperPileHeight: "Varies by deadline proximity",
          snackResidueAccumulation: "Moderate"
        },
        quirks: {
          wobbleFrequency: "After third coffee",
          cableNestFormation: "Inevitable",
          drawerChaos: "Increases exponentially"
        }
      }
    },
    smartWatch: {
      ...CONVENTIONAL_METADATA.smartWatch,
      data: {
        anxietyMetrics: {
          stepGoalGuilt: "Moderate to severe",
          standReminders: "Increasingly passive-aggressive",
          bedtimeNagging: "Persistent"
        },
        quirks: {
          randomVibrations: "Startles user 2-3 times daily",
          batteryAnxiety: "Peaks at 20%",
          weatherAccuracy: "Opposite of window view"
        }
      }
    },
    plant: {
      ...CONVENTIONAL_METADATA.plant,
      data: {
        emotionalImpact: {
          guiltTripping: "Master level",
          dramaTendency: "Wilts for attention",
          ownerAnxiety: "Directly proportional to leaf droop"
        },
        quirks: {
          leafDropping: "Always during meetings",
          growthSpurt: "When owner is on vacation",
          soilMessiness: "Defies physics"
        }
      }
    },
    mouse: {
      ...CONVENTIONAL_METADATA.mouse,
      data: {
        frustrationMetrics: {
          cursorDancing: "Random intervals",
          batteryDeath: "During crucial tasks",
          doubleClickPersonality: "Sometimes stubborn"
        },
        quirks: {
          deskWandering: "2cm per hour",
          padRelationship: "Complicated",
          crumbAttraction: "Magnetic"
        }
      }
    },
    chair: {
      ...CONVENTIONAL_METADATA.chair,
      data: {
        socialBehavior: {
          squeakiness: "Increases during meetings",
          territorialNature: "Strongly attached to one user",
          personalityChange: "After lunch"
        },
        quirks: {
          wheelwandering: "Drawn to walls",
          heightAdjustment: "Random self-adjusting",
          cushionMemory: "Remembers bad posture"
        }
      }
    },
    mug: {
      ...CONVENTIONAL_METADATA.mug,
      data: {
        emotionalSupport: {
          morningMoodlift: "Essential",
          procrastinationEnablement: "High",
          meetingEndurance: "+2 hours"
        },
        quirks: {
          spillTiming: "Always during important calls",
          stainArtistry: "Abstract expressions",
          handleLoyalty: "Tests user trust daily"
        }
      }
    }
  };

// Metadata renderer component
const MetadataRenderer = ({ data, indent = 0 }: MetadataRendererProps) => {
  if (typeof data !== 'object') {
    return (
      <span className="courier-new text-sm text-gray-900">
        {`'${data}'`}
      </span>
    );
  }

  return (
    <div style={{ marginLeft: `${indent}rem` }}>
      {Object.entries(data).map(([key, value], index) => (
        <div key={key} className="courier-new">
          {typeof value === 'object' ? (
            <div>
              <span className="text-sm text-gray-900">{key}: {`{`}</span>
              <MetadataRenderer data={value} indent={indent + 1} />
              <div style={{ marginLeft: `${indent}rem` }}>{`}`}</div>
            </div>
          ) : (
            <div className="text-sm text-gray-900">
              {key}: <MetadataRenderer data={value} />
              {index < Object.keys(data).length - 1 && ','}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Object card component
const ObjectCard = ({ object, isSelected, onSelect }: ObjectCardProps) => (
  <div 
    className="relative mb-32"
    style={object.style}
  >
    <div className="flex gap-8">
      <div 
        className={`flex-shrink-0 cursor-pointer transition-all duration-200
          ${isSelected ? 'border border-gray-400' : 'hover:scale-105'}`}
        style={{
          width: object.style.width,
          height: object.style.height
        }}
        onClick={onSelect}
      >
        <img
          src={object.image}
          alt={object.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {isSelected && (
        <div className="border-l border-gray-400 flex-grow mt-5">
          <pre className="courier-new text-sm ml-2">
            <MetadataRenderer data={object.data} />
          </pre>
        </div>
      )}
    </div>
    <p className="mt-2 text-sm font-medium">{object.name}</p>
  </div>
);

const ObjectMetadataGallery = () => {
  const [selectedObject, setSelectedObject] = useState<string | null>(null);
  const [isUnconventional, setIsUnconventional] = useState(false);

  const handleObjectSelect = (id: string) => {
    setSelectedObject(id === selectedObject ? null : id);
  };

  const currentMetadata = isUnconventional ? UNCONVENTIONAL_METADATA : CONVENTIONAL_METADATA;

  return (
    <div className="min-h-screen bg-white p-8 font-courier">
      <header className="mb-12 flex justify-between items-center">
        <div>
          <h1 className="text-2xl mb-2">
            Data of Everyday Objects
          </h1>
          <p className="text-sm text-gray-600">
            Explore the meta-data of everyday objects
          </p>
        </div>
        <div>
          <Toggle 
            isOn={isUnconventional}
            onToggle={() => setIsUnconventional(!isUnconventional)}
          />
        </div>
      </header>

      <div className="relative">
        {Object.entries(currentMetadata).map(([id, object]) => (
          <ObjectCard
            key={id}
            object={object}
            isSelected={selectedObject === id}
            onSelect={() => handleObjectSelect(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ObjectMetadataGallery;