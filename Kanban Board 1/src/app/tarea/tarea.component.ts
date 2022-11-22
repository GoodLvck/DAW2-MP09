import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../models/tarea-model';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})

export class TareaComponent implements OnInit {

    @Input() tarea: Tarea;
    
    constructor() {
        this.tarea = {
            lista: "",
            img: "",
            titulo: "",
            usuarios: [],
            fechaFin: new Date()
        }
    }
    
    ngOnInit(): void {
        
    }

    fechas = (new Date("2022-11-16").toLocaleDateString());
    fechas2 = (new Date("2022-11-16").toLocaleDateString());

    fondoFecha(tarea: Tarea): string{
        let fondo: string = "";

        if(tarea.fechaFin){
            if(tarea.fechaFin > new Date()){
                if(tarea.lista == "Finalizadas"){
                    fondo = "hechoATiempo"
                } else {
                    fondo = "fechaVencido"
                }
            // } else if (){

            } else {
                fondo = "fechaLejana"
            }

        }

        return fondo;
    }

    mostrarFecha(fecha: Date) : string{

        let fechaTmp: Date = fecha;
        let fechaString: string;

        fechaString = fechaTmp.toLocaleDateString();

        return fechaString;

    }

    // getDifferenceInDays(date1: Date, date2:Date) {
    //     const diffInMs = Math.abs(date2.getTime() - date1.getTime());
    //     return diffInMs / (1000 * 60 * 60 * 24);
    // }

}
