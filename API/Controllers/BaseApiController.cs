using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")] // loalhost:5000/WeatherForecast >> without Controller 
    public class BaseApiController : ControllerBase
    {
        
    }
}