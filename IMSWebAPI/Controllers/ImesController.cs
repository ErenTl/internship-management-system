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
    public class ImesController : ControllerBase
    {
        private readonly imsdbContext _context;

        public ImesController(imsdbContext context)
        {
            _context = context;
        }

        // GET: api/Imes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ime>>> GetImes()
        {
            return await _context.Imes.ToListAsync();
        }

        // GET: api/Imes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ime>> GetIme(long id)
        {
            var ime = await _context.Imes.FindAsync(id);

            if (ime == null)
            {
                return NotFound();
            }

            return ime;
        }

        // PUT: api/Imes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIme(long id, Ime ime)
        {
            if (id != ime.Id)
            {
                return BadRequest();
            }

            _context.Entry(ime).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ImeExists(id))
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

        // POST: api/Imes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Ime>> PostIme(Ime ime)
        {
            _context.Imes.Add(ime);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIme", new { id = ime.Id }, ime);
        }

        // DELETE: api/Imes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIme(long id)
        {
            var ime = await _context.Imes.FindAsync(id);
            if (ime == null)
            {
                return NotFound();
            }

            _context.Imes.Remove(ime);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ImeExists(long id)
        {
            return _context.Imes.Any(e => e.Id == id);
        }
    }
}
