import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  bmi: number
  resultado: string;
  interpretacion: string;

  constructor(private route: ActivatedRoute) {

    this.resultado = ''
    this.interpretacion = ''
   
    this.bmi = +route.snapshot.paramMap.get('valor')!; 
  }
  
  ngOnInit(): void{
    this.getResultado()
  }

    getResultado() {
      if(this.bmi >= 30 ) {
        this.resultado = 'Obesidad'
        this.interpretacion = 'Padece de obecidad. Intente hacer ejercicio y llevar una dieta balanceada.'
      } else if(this.bmi >= 25) {
        this.resultado = 'Exeso de Peso'
        this.interpretacion = 'Tienes peso corporal superior al normal. Intente hacer ejercicio.'
      } else  if(this.bmi >= 18.5) {
        this.resultado = 'Normal'
        this.interpretacion = 'Tienes un peso corporal normal. Buen trabajo!'
      } else {
        this.resultado = 'Bajo de peso'
        this.interpretacion = 'Tienes un peso corporal mas bajo de lo normal. Puedes comer un poco mas'
      
    }
  }

}
