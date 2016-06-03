import { Pipe } from '@angular/core';

@Pipe({
    name: 'country'
})
export class CountryPipe {
    transform(value: Array<string>, [countryName]) {
        if (countryName) {
            return value.filter((c: any) => c.Country === countryName);
        }
        return value;
    }
}
