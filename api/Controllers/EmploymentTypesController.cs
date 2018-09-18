using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Entities;

namespace WebApi
{
    [Route("api/[controller]")]
    public class EmploymentTypesController: Controller
    {
        Entities.DataContext dbContext;

        public EmploymentTypesController(Entities.DataContext dbContext) => this.dbContext = dbContext;

        [HttpGet]
        public async Task<IEnumerable<employment_type>> Get()
        {
            return await dbContext.employment_types.ToListAsync();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<employment_type> Get(int id)
        {

            return await dbContext.employment_types.Where(t => t.id == id).FirstOrDefaultAsync();
        }

        // POST api/values
        [HttpPost]
        public async Task<employment_type> Post([FromBody]employment_type value)
        {
            dbContext.employment_types.Add(value);
            await dbContext.SaveChangesAsync();
            return value;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<employment_type> Put(int id, [FromBody]employment_type value)
        {
            var entity = dbContext.employment_types.Where(t => t.id == id).FirstOrDefault();
            entity.name = value.name;
            entity.active = value.active;
            await dbContext.SaveChangesAsync();
            return entity;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<employment_type> Delete(int id)
        {
            var entity = dbContext.employment_types.Where(t => t.id == id).FirstOrDefault();
            dbContext.employment_types.Remove(entity);
            await dbContext.SaveChangesAsync();
            return entity;
        }

    }
}
