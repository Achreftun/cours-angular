import { FormControl } from "@angular/forms";

export function checkPrenomValidator(control: FormControl): null | object {
    const str: string = control.value ?? "";
    if (str[0] >= 'A' && str[0] <= 'Z') {
        return null;
    } else {
        return {
            majuscule: 'Le prénom doit commencer par une lettre en majuscule'
        };
    }
}