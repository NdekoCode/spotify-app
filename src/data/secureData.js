// export const CLIENT_ID = '068fc5eedfa7413d85570a55dbfafcbf';
// export const CLIENT_SECRET = '392a4d0e8d46450fbf18f7b8ba515e8d';
// export const urlParams = 'offset=20&limit=20';
console.log(import.meta.env.VITE_CLIENT_ID);
export const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
export const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
export const urlParams = 'offset=20&limit=20';
