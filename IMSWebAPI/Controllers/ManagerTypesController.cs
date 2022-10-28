using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IMSWebAPI.Models;

namespace IMSWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ManagerTypesController : ControllerBase
    {
        private readonly imsdbContext _context;

        public ManagerTypesController(imsdbContext context)
        {
            _context = context;
        }

        // GET: api/ManagerTypes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ManagerType>>> GetManagerTypes()
        {
            return await _context.ManagerTypes.ToListAsync();
        }

        // GET: api/ManagerTypes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ManagerType>> GetManagerType(short id)
        {
            var managerType = await _context.ManagerTypes.FindAsync(id);

            if (managerType == null)
            {
                return NotFound();
            }

            return managerType;
        }

        // PUT: api/ManagerTypes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutManagerType(short id, ManagerType managerType)
        {
            if (id != managerType.Id)
            {
                return BadRequest();
            }

            _context.Entry(managerType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ManagerTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ManagerTypes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ManagerType>> PostManagerType(ManagerType managerType)
        {
            _context.ManagerTypes.Add(managerType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetManagerType", new { id = managerType.Id }, managerType);
        }

        // DELETE: api/ManagerTypes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteManagerType(short id)
        {
            var managerType = await _context.ManagerTypes.FindAsync(id);
            if (managerType == null)
            {
                return NotFound();
            }

            _context.ManagerTypes.Remove(managerType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ManagerTypeExists(short id)
        {
            return _context.ManagerTypes.Any(e => e.Id == id);
        }
    }
}
