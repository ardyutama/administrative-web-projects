export const VMStatusTypes = [
    {
      id: 1,
      name: "active-running",
    },
    {
      id: 2,
      name: "active-stopped",
    },
    {
      id: 3,
      name: "removed",
    },
  ];
  
export const DiskTypes = [
    {
      id: 1,
      name: "Rapiddisk",
    },
    {
      id: 2,
      name: "Turbodisk",
    },
  ];
  
export const OSTypes = [
    {
      id: 1,
      name: "windows 10",
    },
    {
      id: 2,
      name: "linux",
    },
  ];
  
//   type PricesType = {
//     id: number;
//     resource_type: string;
//     qty: number;
//     price_per_hour: number;
//   };
  
export const pricesTypes = [
    {
      id: 1,
      resource_type: "cpu",
      qty: 1,
      price_per_hour: 10000,
    },
    {
      id: 2,
      resource_type: "memory",
      qty: 1,
      price_per_hour: 20000,
    },
    {
      id: 3,
      resource_type: "hdd",
      qty: 100,
      price_per_hour: 20000,
    },
    {
      id: 4,
      resource_type: "hdd",
      qty: 100,
      price_per_hour: 20000,
    },
    {
      id: 4,
      resource_type: "Rapiddisk",
      qty: 1,
      price_per_hour: 30000, 
    },
    {
      id: 5,
      resource_type: "Turbodisk",
      qty: 1,
      price_per_hour: 40000, 
    },
    {
      id: 6,
      resource_type: "windows 10", 
      qty: 1,
      price_per_hour: 50000, 
    },
    {
      id: 7,
      resource_type: "linux", 
      qty: 1,
      price_per_hour: 60000, 
    },
  ];