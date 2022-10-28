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
    public class FieldOfActivitiesController : ControllerBase
    {
        private readonly imsdbContext _context;

        public FieldOfActivitiesController(imsdbContext context)
        {
            _context = context;
        }

        // GET: api/FieldOfActivities
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FieldOfActivity>>> GetFieldOfActivities()
        {
            return await _context.FieldOfActivities.ToListAsync();
        }

        // GET: api/FieldOfActivities/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FieldOfActivity>> GetFieldOfActivity(int id)
        {
            var fieldOfActivity = await _context.FieldOfActivities.FindAsync(id);

            if (fieldOfActivity == null)
            {
                return NotFound();
            }

            return fieldOfActivity;
        }

        // PUT: api/FieldOfActivities/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFieldOfActivity(int id, FieldOfActivity fieldOfActivity)
        {
            if (id != fieldOfActivity.Id)
            {
                return BadRequest();
            }

            _context.Entry(fieldOfActivity).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FieldOfActivityExists(id))
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

        // POST: api/FieldOfActivities
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FieldOfActivity>> PostFieldOfActivity(FieldOfActivity fieldOfActivity)
        {
            _context.FieldOfActivities.Add(fieldOfActivity);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFieldOfActivity", new { id = fieldOfActivity.Id }, fieldOfActivity);
        }

        // DELETE: api/FieldOfActivities/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFieldOfActivity(int id)
        {
            var fieldOfActivity = await _context.FieldOfActivities.FindAsync(id);
            if (fieldOfActivity == null)
            {
                return NotFound();
            }

            _context.FieldOfActivities.Remove(fieldOfActivity);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FieldOfActivityExists(int id)
        {
            return _context.FieldOfActivities.Any(e => e.Id == id);
        }
    }
}
