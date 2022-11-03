using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IMSWebAPI.Models;
using IMSWebAPI.Models.APIModels;
using IMSWebAPI.Tools;


namespace IMSWebAPI.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class InternshipsController : ControllerBase
    {
        private Microsoft.AspNetCore.Hosting.IHostingEnvironment Environment;
        private readonly imsdbContext _context;

        public InternshipsController(imsdbContext context, Microsoft.AspNetCore.Hosting.IHostingEnvironment _environment)
        {
            _context = context;
            Environment = _environment;

        }



        // GET: api/Internships
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Internship>>> GetInternships()
        {
            return await _context.Internships.ToListAsync();
        }
        

        [HttpGet("download/{id}")]
        public async Task<IActionResult> Download(long id)
        { 
            await DownloadDeneme(id);

            return PhysicalFile(this.Environment.WebRootPath+"/pdf/GeneratedEvulationPdfFiles/" + id + ".pdf", "application/pdf", id + ".pdf");
            //return PhysicalFile("C:/Users/eren_/Documents/demos/IMS-yazlab/internship-management-system/IMSWebAPI/wwwroot/pdf/GeneratedEvulationPdfFiles/" + id + ".pdf", "application/pdf", id+".pdf");
        }

        [HttpGet("downloaddeneme")]
        public async Task<ActionResult<Boolean>> DownloadDeneme(long id)
        {
            InternshipInformationPDF intern = new InternshipInformationPDF();

            var internship = await _context.Internships.FindAsync(id);

            if (internship == null)
            {
                return NotFound();
            }

            var stis = await _context.StudentInternships.Where(u => u.InternId == id).FirstOrDefaultAsync();

            internship.StudentInternships.FirstOrDefault().StudentId = stis.StudentId;
            internship.StudentInternships.FirstOrDefault().InternId = stis.InternId;

            var student = await _context.Students.FindAsync(stis.StudentId);
            internship.StudentInternships.FirstOrDefault().Student = student;

            var user = await _context.Users.FindAsync(stis.StudentId);
            internship.StudentInternships.FirstOrDefault().Student.User = user;

            var address = await _context.Addresses.FindAsync(internship.AddressId);
            internship.Address = address;

            var district = await _context.Districts.FindAsync(internship.Address.DistrictId);
            internship.Address.District = district;

            var city = await _context.Cities.FindAsync(internship.Address.District.CityId);
            internship.Address.District.City = city;

            var company = await _context.Companies.Where(c => c.Id == internship.CompanyId).FirstOrDefaultAsync();
            internship.Company.Id = company.Id;




            var companyFields = await _context.CompanyFields.Where(cf => cf.CompanyId == company.Id).FirstOrDefaultAsync();
            internship.Company.CompanyFields.FirstOrDefault().Id = companyFields.Id;
            
            var companyAddress = await _context.Addresses.FindAsync(company.AddressId);
            company.Address = companyAddress;

            var companyDistrict = await _context.Districts.FindAsync(companyAddress.DistrictId);
            company.Address.District = district;

            var companyCity = await _context.Cities.FindAsync(company.Address.District.CityId);
            internship.Address.District.City = city;



            var Fields = await _context.FieldOfActivities.Where(foa => foa.Id == companyFields.FieldId).FirstOrDefaultAsync();
            companyFields.Field = Fields;

            var department = await _context.Departments.FindAsync(user.DepartmentId);
            user.Department = department;


            intern.date = DateTime.Now.ToString("dd/MM/yyyy");
            intern.firstName = user.FirstName;
            intern.lastName = user.LastName;
            intern.tc = user.Tc;
            intern.telephone = user.Telephone;
            intern.email = user.Email;
            intern.address = internship.Address.AddressInfo;
            intern.city = internship.Address.District.City.Name;
            intern.district = internship.Address.District.Name;
            intern.postalCode = internship.Address.District.Id.ToString();
            intern.intern_1 = internship.InternshipType==1 ? true : false;
            intern.intern_2 = internship.InternshipType==2 ? true : false;
            intern.startingDate = internship.StartingDate.ToString();
            intern.endingDate = internship.EndingDate.ToString();
            intern.workDay = internship.WorkDay;

            intern.firstQuestion = internship.Sgk;
            intern.secondQuestion = internship._25age;
            intern.thirdQuestion = internship.Gss;

            intern.companyName = company.FormalName;
            intern.companyScope = Fields.Name;
            intern.companyAddress = company.Address.AddressInfo;
            intern.companycity = company.Address.District.City.Name;
            intern.companyDistrict = company.Address.District.Name;
            intern.companyPostalCode = company.Address.District.Id.ToString();
            intern.companyTelephone = company.Telephone;
            intern.companyFax = company.Fax;
            intern.companyEmail = company.Email;

            intern.engineer = internship.Manager == 1 ? true : false;
            intern.teacher = internship.Manager == 2 ? true : false;
            intern.doctor = internship.Manager == 3 ? true : false;

            intern.companyQuestion = internship.StateContribution;

            intern.studentNumber = user.Student.StudentNumber;
            intern.departmentName = department.Name;

            InternEvulationFormToPDF.PrintInternAcceptanceForm(intern, id);
            return true;

        }

        


        [HttpGet("getInternshipsByUserId/{userId}")]
        public async Task<ActionResult<IEnumerable<Internship>>> GetInternshipsByUserId(long userId)
        {
            //var ss = _context.StudentInternships
            //                    .Include(Internship.)
            //                    .Where(si => si.StudentId == userId)
            //                    .ToList();
            var dd = _context.Internships
                .Include(i => i.StudentInternships.Where(si => si.StudentId == userId))
                .Include(i => i.Company)
                .Include(i => i.Address)
                .Include(i => i.Address.District)
                .Include(i => i.Address.District.City)
                .ToListAsync().Result;

            //var list = _context.StudentInternships.Where(sii => sii.StudentId == id).Select(si => new { internId = si.InternId }).ToListAsync();
            //var x = await (from si in StudentInterqnship join
            //               inte in _context.Internships on si.studentId equals userId
            //               select new
            //               {
            //                   internId = si.InternId,
            //               }).toListAsync();
            if(dd == null)
            {
                return NotFound();
            }
            return dd;

        }


        // GET: api/Internships/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Internship>> GetInternship(long id)
        {
            var internship = await _context.Internships.FindAsync(id);

            var stis =  await _context.StudentInternships.Where(u => u.InternId == id).FirstOrDefaultAsync();
            
            internship.StudentInternships.FirstOrDefault().StudentId = stis.StudentId;
            internship.StudentInternships.FirstOrDefault().InternId = stis.InternId;

            var student = await _context.Students.FindAsync(stis.StudentId);
            internship.StudentInternships.FirstOrDefault().Student = student;
            
            var user = await _context.Users.FindAsync(stis.StudentId);
            internship.StudentInternships.FirstOrDefault().Student.User = user;

            var address = await _context.Addresses.FindAsync(internship.AddressId);
            internship.Address = address;

            var district = await _context.Districts.FindAsync(internship.Address.DistrictId);
            internship.Address.District = district;

            var city = await _context.Cities.FindAsync(internship.Address.District.CityId);
            internship.Address.District.City = city;

            var company = await _context.Companies.Where(c => c.Id == internship.CompanyId).FirstOrDefaultAsync();
            internship.Company.Id = company.Id;

            var companyAddress = await _context.Addresses.FindAsync(company.AddressId);
            company.Address = companyAddress;

            var companyDistrict = await _context.Districts.FindAsync(companyAddress.DistrictId);
            company.Address.District = district;

            var companyCity = await _context.Cities.FindAsync(company.Address.District.CityId);
            internship.Address.District.City = city;

            var companyFields = await _context.CompanyFields.Where(cf => cf.CompanyId == company.Id).FirstOrDefaultAsync();
            internship.Company.CompanyFields.FirstOrDefault().Id = companyFields.Id;

            var Fields = await _context.FieldOfActivities.Where(foa => foa.Id == companyFields.FieldId).FirstOrDefaultAsync();
            companyFields.Field = Fields;

            //var userId = stis.StudentId;

            //var user = await _context.Users.FindAsync(userId);
            

            if (internship == null)
            {
                return NotFound();
            }

            return internship;
        }

        [HttpGet("readpdf/{id}")]
        public IActionResult PhysicalLocation(long id)
        {
            string physicalPath = "wwwroot/pdf/GeneratedEvulationPdfFiles/" + id +".pdf";
            byte[] pdfBytes = System.IO.File.ReadAllBytes(physicalPath);
            MemoryStream ms = new MemoryStream(pdfBytes);
            return new FileStreamResult(ms, "application/pdf");
        }


        // PUT: api/Internships/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInternship(long id, Internship internship)
        {
            if (id != internship.Id)
            {
                return BadRequest();
            }

            _context.Entry(internship).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InternshipExists(id))
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




        // POST: api/Internships
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Internship>> PostInternship(Internship internship)
        {
            _context.Internships.Add(internship);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInternship", new { id = internship.Id }, internship);
        }

        // DELETE: api/Internships/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInternship(long id)
        {
            var internship = await _context.Internships.FindAsync(id);
            if (internship == null)
            {
                return NotFound();
            }

            _context.Internships.Remove(internship);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InternshipExists(long id)
        {
            return _context.Internships.Any(e => e.Id == id);
        }
    }
}
