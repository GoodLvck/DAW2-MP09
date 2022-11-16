import { NumberSymbol } from '@angular/common';
import {
    Component
} from '@angular/core';

interface Mes{
    nombre: string;
    diasCnt: number[];
    inicio: number[];
    festivos: Festivo[];
}

interface Festivo{
    numero: number;
    tipoFestivo: TipoFestivo;
}

interface TipoFestivo{
    tipo: string;
    color: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    tipoFestivo: TipoFestivo[] = [
        {tipo: "Nacional", color: "#50d413"},
        {tipo: "Regional", color: "#7434eb"},
        {tipo: "Local", color: "#eb34e5"},
        {tipo: "Centre", color: "#13cad4"}
    ];

    meses: Mes[] = [
        {nombre: "Septiembre", diasCnt: this.arrayNumber(30), inicio: this.arrayNumber(3), festivos:[
            {numero: 11, tipoFestivo: this.tipoFestivo[1]},
            {numero: 29, tipoFestivo: this.tipoFestivo[2]}
        ]},
        {nombre: "Octubre", diasCnt: this.arrayNumber(31), inicio: this.arrayNumber(5), festivos:[
            {numero: 12, tipoFestivo: this.tipoFestivo[0]},
            {numero: 31, tipoFestivo: this.tipoFestivo[3]}
        ]}
    ];

    diasTxt: String[] = ["L", "M", "X", "J", "V", "S", "D"];


    arrayNumber(maxNumber: number): number[] {
        let numeros: number[] = [];

        for(let i = 0; i < maxNumber; i++){
            numeros.push(i + 1)
        }

        return numeros;
    }

    
    colorFondo(festivos: Festivo[], dia: number) : string{
        let festivo: string = "";

        for(let d of festivos){
            if(d.numero == dia){
                festivo = d.tipoFestivo.tipo.toLowerCase();
                festivo += " festivo";
            }
        }

        return festivo;
    }

}

