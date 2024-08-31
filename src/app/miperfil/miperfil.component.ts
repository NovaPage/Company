import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './miperfil.component.html',
  styleUrls: ['./miperfil.component.scss']
})
export class MiperfilComponent {
  // Array de objetos que representan las tarjetas de estado de ánimo
  cards = [
    { title: 'Estado de Ánimo 1', question: '¿Estás feliz o triste?', state: '' },
    { title: 'Estado de Ánimo 2', question: '¿Estás feliz o triste?', state: '' },
    { title: 'Estado de Ánimo 3', question: '¿Estás feliz o triste?', state: '' },
    { title: 'Estado de Ánimo 4', question: '¿Te sientes motivado o desmotivado?', state: '' },
    { title: 'Estado de Ánimo 5', question: '¿Estás calmado o ansioso?', state: '' },
    { title: 'Estado de Ánimo 6', question: '¿Te sientes enfocado o disperso?', state: '' }
  ];

  // Objeto que representa la calculadora
  calculator = {
    display: '0', // Valor actual mostrado en la calculadora
    keys: ['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '0', '.', 'C', '+', '='] // Teclas disponibles
  };

  // Función para desplazar la vista a una sección específica de la página
  scrollToSection(sectionId: string): void {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Función para actualizar el estado de una tarjeta de estado de ánimo
  setCardState(card: { state: string; }, state: string): void {
    card.state = state;
  }

  // Función para manejar la lógica de la calculadora cuando se presiona una tecla
  onCalculatorKeyPress(key: string): void {
    if (key === '=') {
      // Calcula el resultado de la expresión matemática en la pantalla
      this.calculator.display = this.calculate(this.calculator.display);
    } else if (key === 'C') {
      // Resetea la pantalla de la calculadora a '0'
      this.calculator.display = '0';
    } else {
      // Actualiza la pantalla con el nuevo valor ingresado
      this.calculator.display = this.calculator.display === '0' ? key : this.calculator.display + key;
    }
  }

  // Función para evaluar la expresión matemática de la calculadora
  calculate(expression: string): string {
    try {
      // Reemplaza los símbolos de división y multiplicación por los operadores válidos
      const sanitizedExpression = expression.replace(/÷/g, '/').replace(/×/g, '*');
      // Evalúa la expresión y devuelve el resultado
      return eval(sanitizedExpression).toString();
    } catch {
      // Si hay un error en la evaluación, muestra 'Error' en la pantalla
      return 'Error';
    }
  }
}
