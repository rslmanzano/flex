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
    public class ClientsController
    {
		Entities.DataContext dbContext;
		public ClientsController(Entities.DataContext dbContext) => this.dbContext = dbContext;
        [HttpGet]
        public async Task<IEnumerable<client>>Get()
		{
			return await dbContext.clients.ToListAsync();
		}

		[HttpGet("{id}")]
        public async Task<client> Get(int id)
		{
			return await dbContext.clients.Where(t => t.id == id).FirstOrDefaultAsync();
		}

        [HttpPost]
		public async Task<client> Post([FromBody]client value)
		{
			dbContext.clients.Add(value);
			await dbContext.SaveChangesAsync();
			return value;
		}
		[HttpPut("{id}")]
        public async Task<client> Put(int id, [FromBody]client value)
		{
			var entity = dbContext.clients.Where(t => t.id == id).FirstOrDefault();
			entity.name = value.name;
			entity.active = value.active;

			await dbContext.SaveChangesAsync();
			return entity;
		}
		[HttpDelete("{id}")]
        public async Task<client> Delete(int id)
        {
            var entity = dbContext.clients.Where(t => t.id == id).FirstOrDefault();
			dbContext.clients.Remove(entity);
            await dbContext.SaveChangesAsync();
            return entity;
        }    }
}
