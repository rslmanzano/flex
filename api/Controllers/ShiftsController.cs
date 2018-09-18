using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Dtos;
using WebApi.Entities;

namespace WebApi
{
    [Route("api/[controller]")]
    public class ShiftsController
    {
        Entities.DataContext dbContext;
        public ShiftsController(Entities.DataContext dbContext) => this.dbContext = dbContext;

        [HttpGet]
        public async Task<IEnumerable<shift>> Get()
        {
            return await dbContext.shifts.ToListAsync();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<shift> Get(int id)
        {

            return await dbContext.shifts.Where(t => t.id == id).FirstOrDefaultAsync();
        }

        // POST api/values
        [HttpPost]
        public async Task<shift> Post([FromBody]shift value)
        {
            dbContext.shifts.Add(value);
            await dbContext.SaveChangesAsync();
            return value;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<shift> Put(int id, [FromBody]shift value)
        {
            var entity = dbContext.shifts.Where(t => t.id == id).FirstOrDefault();
            entity.name = value.name;
            entity.time_start = value.time_start;
            entity.time_end = value.time_end;
            entity.active = value.active;
            await dbContext.SaveChangesAsync();
            return entity;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<shift> Delete(int id)
        {
            var entity = dbContext.shifts.Where(t => t.id == id).FirstOrDefault();
            dbContext.shifts.Remove(entity);
            await dbContext.SaveChangesAsync();
            return entity;
        }
    }
}
