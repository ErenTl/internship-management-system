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
    public class CommissionsController : ControllerBase
    {
        private readonly imsdbContext _context;

        public CommissionsController(imsdbContext context)
        {
            _context = context;
        }

        // GET: api/Commissions
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Commission>>> GetCommissions()
        {
            return await _context.Commissions.ToListAsync();
        }

        // GET: api/Commissions/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Commission>> GetCommission(short id)
        {
            var commission = await _context.Commissions.FindAsync(id);

            if (commission == null)
            {
                return NotFound();
            }

            return commission;
        }

        // PUT: api/Commissions/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCommission(short id, Commission commission)
        {
            if (id != commission.Id)
            {
                return BadRequest();
            }

            _context.Entry(commission).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommissionExists(id))
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

        // POST: api/Commissions
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Commission>> PostCommission(Commission commission)
        {
            _context.Commissions.Add(commission);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCommission", new { id = commission.Id }, commission);
        }

        // DELETE: api/Commissions/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCommission(short id)
        {
            var commission = await _context.Commissions.FindAsync(id);
            if (commission == null)
            {
                return NotFound();
            }

            _context.Commissions.Remove(commission);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CommissionExists(short id)
        {
            return _context.Commissions.Any(e => e.Id == id);
        }
    }
}
