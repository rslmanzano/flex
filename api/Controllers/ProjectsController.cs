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
    public class ProjectsController
    {
        Entities.DataContext dbContext;
        public ProjectsController(Entities.DataContext dbContext) => this.dbContext = dbContext;
        [HttpGet]
        public async Task<IEnumerable<project>> Get()
        {
            return await dbContext.projects.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<project> Get(int id)
        {
            return await dbContext.projects.Where(t => t.id == id).FirstOrDefaultAsync();
        }

        [HttpPost]
        public async Task<project> Post([FromBody]project value)
        {
            dbContext.projects.Add(value);
            await dbContext.SaveChangesAsync();
            return value;
        }
        [HttpPut("{id}")]
        public async Task<project> Put(int id, [FromBody]project value)
        {
            var entity = dbContext.projects.Where(t => t.id == id).FirstOrDefault();
            entity.name = value.name;
            entity.client_id = value.client_id;
         
            await dbContext.SaveChangesAsync();
            return entity;
        }
        [HttpDelete("{id}")]
        public async Task<project> Delete(int id)
        {
            var entity = dbContext.projects.Where(t => t.id == id).FirstOrDefault();
            dbContext.projects.Remove(entity);
            await dbContext.SaveChangesAsync();
            return entity;
        }
    }
}
