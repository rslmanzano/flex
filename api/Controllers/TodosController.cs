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
    public class TodosController
    {
        Entities.DataContext dbContext;
        public TodosController(Entities.DataContext dbContext) => this.dbContext = dbContext;
        [HttpGet]
        public async Task<IEnumerable<todo>> Get()
        {
            return await dbContext.todos.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<IEnumerable<todo>> Get(int id)
        {
            return await dbContext.todos.Where(t => t.task_id == id).ToListAsync();
        }

        [HttpPost]
        public async Task<todo> Post([FromBody]todo value)
        {
            dbContext.todos.Add(value);
            await dbContext.SaveChangesAsync();
            return value;
        }
        [HttpPut("{id}")]
        public async Task<todo> Put(int id, [FromBody]todo value)
        {
            var entity = dbContext.todos.Where(t => t.id == id).FirstOrDefault();
            entity.completed = value.completed;
            entity.task_id = value.task_id;
            entity.todo_source = 1;
            entity.text = value.text;

            await dbContext.SaveChangesAsync();
            return entity;
        }
        [HttpDelete("{id}")]
        public async Task<todo> Delete(int id)
        {
            var entity = dbContext.todos.Where(t => t.id == id).FirstOrDefault();
            dbContext.todos.Remove(entity);
            await dbContext.SaveChangesAsync();
            return entity;
        }
    }
}
