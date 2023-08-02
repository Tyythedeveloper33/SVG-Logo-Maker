// Import the necessary functions and classes
const { renderLogo } = require('../index'); 


// Test for the renderLogo function
describe('renderLogo', () => {
  it('should render an SVG logo', () => {
    const text = 'ABC';
    const textColor = 'red';
    const shape = {
      render: jest.fn().mockReturnValue('<circle />') 
    };
    const shapeColor = 'blue';


    const expectedSVGContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle /> <!-- Replace this with the SVG content of the shape you expect -->
        <text x="50%" y="50%" fill="${textColor}" font-size="24" text-anchor="middle">${text}</text>
      </svg>
    `;


    const result = renderLogo(text, textColor, shape, shapeColor);
    expect(result).toBe(expectedSVGContent);
  });
});
