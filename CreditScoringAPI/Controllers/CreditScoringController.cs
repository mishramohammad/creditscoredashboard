using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/credit-scoring")]
public class CreditScoringController : ControllerBase
{
    [HttpPost]
    [Route("calculate")]
    public IActionResult CalculateCreditScore([FromBody] CustomerData customerData)
    {
        try
        {
            double creditScore = CalculateCreditScoreLogic(customerData);
            return Ok(creditScore);
        }
        catch (Exception ex)
        {
            return BadRequest("Error calculating credit score: " + ex.Message);
        }
    }

    private double CalculateCreditScoreLogic(CustomerData customerData)
    {
        double income = customerData.Income;
        int creditHistory = customerData.CreditHistory;
        double outstandingDebt = customerData.OutstandingDebt;

        double creditScore = (income * 0.6) + (creditHistory * 0.3) - (outstandingDebt * 0.1);

        return creditScore;
    }
}

/**try { ... } catch (Exception ex) { ... }: This is a try-catch block. 
It attempts to perform a task (calculating the credit score) within the try block. 
If an error occurs, it catches the error and executes code within the catch block to handle the error gracefully.

double income = customerData.Income;, 
int creditHistory = customerData.CreditHistory;, 
double outstandingDebt = customerData.OutstandingDebt;:
 These lines extract data from the CustomerData object, allowing you to work with the customer's income, 
 credit history, and outstanding debt in the calculation.

double creditScore = (income * 0.6) + (creditHistory * 0.3) - (outstandingDebt * 0.1);: 
This line calculates the credit score using a simple formula. 
It assigns different weightings (0.6, 0.3, and 0.1) to income, credit history, and outstanding debt

return creditScore;: The calculated credit score is returned as the result of the API request.

The code is structured to create a web API endpoint that receives customer data, 
performs a basic credit score calculation, and returns the result. 
It uses ASP.NET Core to handle HTTP requests, and the code structure follows best practices for building API endpoints.
The calculation logic is a simplified example*/