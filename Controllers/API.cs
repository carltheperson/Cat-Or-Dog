using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Cat_Or_Dog.Controllers
{
    [ApiController]
    [Route("api")]
    public class API : ControllerBase
    {
        [HttpGet]
        public string Get(int score, string seed) {
            return Decider.Decide(score, seed);
        }
    }
}
