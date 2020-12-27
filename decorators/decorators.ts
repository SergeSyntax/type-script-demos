@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Something bad!')
  pilot(@paramterDecorator speed: string, @paramterDecorator generateWake: boolean): void {
    if (speed === 'fast') console.log('swish');
    else console.log('nothing');
  }
}
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = () => {
      try {
        method();
      } catch (err) {
        console.log(errorMessage);
      }
    };
  };
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

function paramterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function classDecorator(constuructor: typeof Boat) {
  console.log(constuructor);
}
