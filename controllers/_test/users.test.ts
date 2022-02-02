// import { signUp } from "./../users";
// import { Request, Response, NextFunction } from 'express';


// describe('User Registration', () => {
//     test('User has an invalid username', async () => {
//       const mockRequest: any = {
//         body: {
//           username: 'priyaM',
//           email: "priya20@gmail.com",
//           password: "1234567890"
//         },
//       };
  
//       const mockResponse: any = {
//         json: jest.fn(),
//         status: jest.fn(),
//       };
  
//       const mockNext: NextFunction = jest.fn();
  
//       await signUp(mockRequest, mockResponse, mockNext);
  
//       expect(mockNext).toHaveBeenCalledTimes(1);
//       expect(mockNext).toHaveBeenCalledWith(
//         new Error('First name must be between 2 and 50 characters')
//       );
//     });
//   });