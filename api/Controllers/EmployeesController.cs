using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Entities;
using WebApi.Enums;
using WebApi.Interfaces;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApi
{
    
    
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        Entities.DataContext dbContext;

        public EmployeesController(Entities.DataContext dbContext) => this.dbContext = dbContext;
        // GET: api/values

        [HttpGet]
        public async Task<IEnumerable<employee>> Get()
        {
            return await dbContext.employees.ToListAsync();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<employee> Get(int id)
        {

            return await dbContext.employees.Where(t => t.id == id).FirstOrDefaultAsync();
        }

        // POST api/values
        [HttpPost]
        public async Task<employee> Post([FromBody]employee value)
        {
            dbContext.employees.Add(value);
            await dbContext.SaveChangesAsync();
            return value;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<employee> Put(int id, [FromBody]employee value)
        {
            var entity = dbContext.employees.Where(t => t.id == id).FirstOrDefault();
            entity.given_name = value.given_name;
            entity.surname = value.surname;
            entity.code = value.code;
            entity.email_address = value.email_address;
            entity.employee_status_id = value.employee_status_id;
            entity.gender_id = value.gender_id;
            entity.other_given_name = value.other_given_name;
            entity.suffix = value.suffix;
            await dbContext.SaveChangesAsync();
            return entity;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<employee> Delete(int id)
        {
            var entity = dbContext.employees.Where(t => t.id == id).FirstOrDefault();
            dbContext.employees.Remove(entity);
            await dbContext.SaveChangesAsync();
            return entity;
        }
    }
}
