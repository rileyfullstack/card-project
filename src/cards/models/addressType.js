import { number, shape, string } from "prop-types";

const addressType = shape({
    state:string.isRequired,
    country:string.isRequired,
    street:string.isRequired,
    houseNumber:number.isRequired,
    city:string.isRequired,
    zip:number,
});

export default addressType;