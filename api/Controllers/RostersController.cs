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
    public class RostersController
    {
        Entities.DataContext dbContext;
        public RostersController(Entities.DataContext dbContext) => this.dbContext = dbContext;

        [HttpGet]
        public async Task<IEnumerable<roster>> Get()
        {
            return await dbContext.rosters.ToListAsync();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<roster> Get(int id)
        {

            return await dbContext.rosters.Where(t => t.id == id).FirstOrDefaultAsync();
        }

        // POST api/values
        [HttpPost]
        public async Task<roster> Post([FromBody]roster value)
        {
            dbContext.rosters.Add(value);
            await dbContext.SaveChangesAsync();
            return value;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<roster> Put(int id, [FromBody]roster value)
        {
            var entity = dbContext.rosters.Where(t => t.id == id).FirstOrDefault();
            entity.shift_id = value.shift_id;
            entity.date = value.date;
            entity.is_published = value.is_published;
            await dbContext.SaveChangesAsync();
            return entity;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<roster> Delete(int id)
        {
            var entity = dbContext.rosters.Where(t => t.id == id).FirstOrDefault();
            dbContext.rosters.Remove(entity);
            await dbContext.SaveChangesAsync();
            return entity;
        }
    }
}
