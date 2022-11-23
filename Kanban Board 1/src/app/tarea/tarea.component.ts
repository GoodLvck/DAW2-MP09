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

    mostrarFecha(tarea: Tarea) : String{

        let fechaTmp: Date;
        let hoy: Date = new Date();
        let clase: String = "";
        let diferenciaFechas: number = 0;

        if(tarea.fechaFin != null){
            fechaTmp = new Date(tarea.fechaFin);

            diferenciaFechas = fechaTmp.getTime() - hoy.getTime()


            if(diferenciaFechas > 0 && diferenciaFechas < 86400000){
                clase = "fechaCercana"
            } else if(fechaTmp < hoy) { // Ya ha pasado
                if(tarea.lista != "Finalizadas"){
                    clase = "fechaVencido"
                } else {
                    clase = "fechaATiempo"
                }
            } else {
                clase = "fechaLejana"
            }
        }

        return clase

    }

}
