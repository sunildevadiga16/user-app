export { }
export default interface IUSerDataResponse {
  results: {
    name: {
      title: string,
      first: string,
      last: string
    };
    email: string,
    phone: string,
    picture: {
      large: string;
    },
    location: {
      city: string;
      state: string;
      country: string;
    }
  }
}