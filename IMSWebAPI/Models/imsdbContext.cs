using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace IMSWebAPI.Models
{
    public partial class imsdbContext : DbContext
    {
        public imsdbContext()
        {
        }

        public imsdbContext(DbContextOptions<imsdbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AcceptedWorkDayFromUserId> AcceptedWorkDayFromUserIds { get; set; } = null!;
        public virtual DbSet<Address> Addresses { get; set; } = null!;
        public virtual DbSet<Admin> Admins { get; set; } = null!;
        public virtual DbSet<Announcement> Announcements { get; set; } = null!;
        public virtual DbSet<City> Cities { get; set; } = null!;
        public virtual DbSet<Commission> Commissions { get; set; } = null!;
        public virtual DbSet<Company> Companies { get; set; } = null!;
        public virtual DbSet<CompanyField> CompanyFields { get; set; } = null!;
        public virtual DbSet<Department> Departments { get; set; } = null!;
        public virtual DbSet<District> Districts { get; set; } = null!;
        public virtual DbSet<Faculty> Faculties { get; set; } = null!;
        public virtual DbSet<FieldOfActivity> FieldOfActivities { get; set; } = null!;
        public virtual DbSet<Ime> Imes { get; set; } = null!;
        public virtual DbSet<Internship> Internships { get; set; } = null!;
        public virtual DbSet<InternshipControlInfo> InternshipControlInfos { get; set; } = null!;
        public virtual DbSet<InternshipDocControl> InternshipDocControls { get; set; } = null!;
        public virtual DbSet<InternshipExam> InternshipExams { get; set; } = null!;
        public virtual DbSet<InternshipType> InternshipTypes { get; set; } = null!;
        public virtual DbSet<ManagerType> ManagerTypes { get; set; } = null!;
        public virtual DbSet<Student> Students { get; set; } = null!;
        public virtual DbSet<StudentInternship> StudentInternships { get; set; } = null!;
        public virtual DbSet<Teacher> Teachers { get; set; } = null!;
        public virtual DbSet<User> Users { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseNpgsql("Host=localhost;Database=imsdb;Username=postgres;Password=dbpass");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AcceptedWorkDayFromUserId>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("acceptedWorkDayFromUserId");

                entity.Property(e => e.AcceptedWorkDay).HasColumnName("acceptedWorkDay");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.InternshipType).HasColumnName("internshipType");
            });

            modelBuilder.Entity<Address>(entity =>
            {
                entity.ToTable("addresses");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AddressInfo)
                    .HasMaxLength(300)
                    .HasColumnName("addressInfo");

                entity.Property(e => e.DistrictId).HasColumnName("districtId");

                entity.HasOne(d => d.District)
                    .WithMany(p => p.Addresses)
                    .HasForeignKey(d => d.DistrictId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("addresses_districtId_fkey");
            });

            modelBuilder.Entity<Admin>(entity =>
            {
                entity.ToTable("admin");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.SuperAdmin).HasColumnName("superAdmin");

                entity.Property(e => e.UserId).HasColumnName("userId");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Admins)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("admin_userId_fkey");
            });

            modelBuilder.Entity<Announcement>(entity =>
            {
                entity.ToTable("announcement");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Content)
                    .HasMaxLength(1000)
                    .HasColumnName("content");

                entity.Property(e => e.Date).HasColumnName("date");

                entity.Property(e => e.Title)
                    .HasMaxLength(100)
                    .HasColumnName("title");
            });

            modelBuilder.Entity<City>(entity =>
            {
                entity.ToTable("city");

                entity.HasIndex(e => e.Name, "city_name_key")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Commission>(entity =>
            {
                entity.ToTable("commission");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.TeacherId).HasColumnName("teacherId");

                entity.HasOne(d => d.Teacher)
                    .WithMany(p => p.Commissions)
                    .HasForeignKey(d => d.TeacherId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("commission_teacherId_fkey");
            });

            modelBuilder.Entity<Company>(entity =>
            {
                entity.ToTable("company");

                entity.HasIndex(e => e.Email, "company_email_key")
                    .IsUnique();

                entity.HasIndex(e => e.Fax, "company_fax_key")
                    .IsUnique();

                entity.HasIndex(e => e.FormalName, "company_formalName_key")
                    .IsUnique();

                entity.HasIndex(e => e.Telephone, "company_telephone_key")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AddressId).HasColumnName("addressId");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.Fax)
                    .HasMaxLength(13)
                    .HasColumnName("fax");

                entity.Property(e => e.FormalName)
                    .HasMaxLength(150)
                    .HasColumnName("formalName");

                entity.Property(e => e.Telephone)
                    .HasMaxLength(12)
                    .HasColumnName("telephone");

                entity.HasOne(d => d.Address)
                    .WithMany(p => p.Companies)
                    .HasForeignKey(d => d.AddressId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("company_addressId_fkey");
            });

            modelBuilder.Entity<CompanyField>(entity =>
            {
                entity.ToTable("companyField");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CompanyId).HasColumnName("companyId");

                entity.Property(e => e.FieldId).HasColumnName("fieldId");

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.CompanyFields)
                    .HasForeignKey(d => d.CompanyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("companyField_companyId_fkey");

                entity.HasOne(d => d.Field)
                    .WithMany(p => p.CompanyFields)
                    .HasForeignKey(d => d.FieldId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("companyField_fieldId_fkey");
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("department");

                entity.HasIndex(e => e.Name, "department_name_key")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.FacultyId).HasColumnName("facultyId");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.HasOne(d => d.Faculty)
                    .WithMany(p => p.Departments)
                    .HasForeignKey(d => d.FacultyId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("department_facultyId_fkey");
            });

            modelBuilder.Entity<District>(entity =>
            {
                entity.ToTable("district");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CityId).HasColumnName("cityId");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");

                entity.HasOne(d => d.City)
                    .WithMany(p => p.Districts)
                    .HasForeignKey(d => d.CityId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("district_cityId_fkey");
            });

            modelBuilder.Entity<Faculty>(entity =>
            {
                entity.ToTable("faculty");

                entity.HasIndex(e => e.Name, "faculty_name_key")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<FieldOfActivity>(entity =>
            {
                entity.ToTable("fieldOfActivity");

                entity.HasIndex(e => e.Name, "fieldOfActivity_name_key")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Ime>(entity =>
            {
                entity.ToTable("IME");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Iban)
                    .HasMaxLength(26)
                    .HasColumnName("IBAN");

                entity.Property(e => e.InternshipId).HasColumnName("internshipId");

                entity.HasOne(d => d.Internship)
                    .WithMany(p => p.Imes)
                    .HasForeignKey(d => d.InternshipId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("IME_internshipId_fkey");
            });

            modelBuilder.Entity<Internship>(entity =>
            {
                entity.ToTable("internship");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AddressId).HasColumnName("addressId");

                entity.Property(e => e.AutumnPeriod).HasColumnName("autumnPeriod");

                entity.Property(e => e.CompanyId).HasColumnName("companyId");

                entity.Property(e => e.EndingDate).HasColumnName("endingDate");

                entity.Property(e => e.Gss).HasColumnName("gss");

                entity.Property(e => e.InternshipType).HasColumnName("internshipType");

                entity.Property(e => e.Manager).HasColumnName("manager");

                entity.Property(e => e.Sgk).HasColumnName("sgk");

                entity.Property(e => e.StartingDate).HasColumnName("startingDate");

                entity.Property(e => e.StateContribution).HasColumnName("stateContribution");

                entity.Property(e => e.WorkDay).HasColumnName("workDay");

                entity.Property(e => e._25age).HasColumnName("25age");

                entity.HasOne(d => d.Address)
                    .WithMany(p => p.Internships)
                    .HasForeignKey(d => d.AddressId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("internship_addressId_fkey");

                entity.HasOne(d => d.Company)
                    .WithMany(p => p.Internships)
                    .HasForeignKey(d => d.CompanyId)
                    .HasConstraintName("internship_companyId_fkey");

                entity.HasOne(d => d.InternshipTypeNavigation)
                    .WithMany(p => p.Internships)
                    .HasForeignKey(d => d.InternshipType)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("internship_internshipType_fkey");

                entity.HasOne(d => d.ManagerNavigation)
                    .WithMany(p => p.Internships)
                    .HasForeignKey(d => d.Manager)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("internship_manager_fkey");
            });

            modelBuilder.Entity<InternshipControlInfo>(entity =>
            {
                entity.ToTable("internshipControlInfo");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.InfoMessage)
                    .HasMaxLength(500)
                    .HasColumnName("infoMessage");

                entity.Property(e => e.InternshipId).HasColumnName("internshipId");

                entity.HasOne(d => d.Internship)
                    .WithMany(p => p.InternshipControlInfos)
                    .HasForeignKey(d => d.InternshipId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("internshipControlInfo_internshipId_fkey");
            });

            modelBuilder.Entity<InternshipDocControl>(entity =>
            {
                entity.ToTable("internshipDocControl");

                entity.HasIndex(e => new { e.InternshipId, e.Accepted }, "internshipDocStatus");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Accepted).HasColumnName("accepted");

                entity.Property(e => e.EvulationFormPath)
                    .HasMaxLength(200)
                    .HasColumnName("evulationFormPath");

                entity.Property(e => e.InternshipId).HasColumnName("internshipId");

                entity.Property(e => e.InternshipsBookPath)
                    .HasMaxLength(200)
                    .HasColumnName("internshipsBookPath");

                entity.HasOne(d => d.Internship)
                    .WithMany(p => p.InternshipDocControls)
                    .HasForeignKey(d => d.InternshipId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("internshipDocControl_internshipId_fkey");
            });

            modelBuilder.Entity<InternshipExam>(entity =>
            {
                entity.ToTable("internshipExam");

                entity.HasIndex(e => new { e.InternshipId, e.AcceptedWorkDay }, "internshipStatus");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.AcceptedWorkDay).HasColumnName("acceptedWorkDay");

                entity.Property(e => e.ExamTime).HasColumnName("examTime");

                entity.Property(e => e.InternshipId).HasColumnName("internshipId");

                entity.Property(e => e.Passed).HasColumnName("passed");

                entity.Property(e => e.TeacherId).HasColumnName("teacherId");

                entity.HasOne(d => d.Internship)
                    .WithMany(p => p.InternshipExams)
                    .HasForeignKey(d => d.InternshipId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("internshipExam_internshipId_fkey");

                entity.HasOne(d => d.Teacher)
                    .WithMany(p => p.InternshipExams)
                    .HasForeignKey(d => d.TeacherId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("internshipExam_teacherId_fkey");
            });

            modelBuilder.Entity<InternshipType>(entity =>
            {
                entity.ToTable("internshipType");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Type)
                    .HasMaxLength(8)
                    .HasColumnName("type");
            });

            modelBuilder.Entity<ManagerType>(entity =>
            {
                entity.ToTable("managerType");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Type)
                    .HasMaxLength(8)
                    .HasColumnName("type");
            });

            modelBuilder.Entity<Student>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("student_pkey");

                entity.ToTable("student");

                entity.HasIndex(e => e.StudentNumber, "student_studentNumber_key")
                    .IsUnique();

                entity.Property(e => e.UserId)
                    .ValueGeneratedNever()
                    .HasColumnName("userId");

                entity.Property(e => e.StudentNumber)
                    .HasMaxLength(9)
                    .HasColumnName("studentNumber");

                entity.HasOne(d => d.User)
                    .WithOne(p => p.Student)
                    .HasForeignKey<Student>(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("student_userId_fkey");
            });

            modelBuilder.Entity<StudentInternship>(entity =>
            {
                entity.ToTable("studentInternship");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.InternId).HasColumnName("internId");

                entity.Property(e => e.StudentId).HasColumnName("studentId");

                entity.HasOne(d => d.Intern)
                    .WithMany(p => p.StudentInternships)
                    .HasForeignKey(d => d.InternId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("studentInternship_internId_fkey");

                entity.HasOne(d => d.Student)
                    .WithMany(p => p.StudentInternships)
                    .HasForeignKey(d => d.StudentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("studentInternship_studentId_fkey");
            });

            modelBuilder.Entity<Teacher>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("teacher_pkey");

                entity.ToTable("teacher");

                entity.HasIndex(e => e.RegistrationNumber, "teacher_registrationNumber_key")
                    .IsUnique();

                entity.Property(e => e.UserId)
                    .ValueGeneratedNever()
                    .HasColumnName("userId");

                entity.Property(e => e.RegistrationNumber)
                    .HasMaxLength(4)
                    .HasColumnName("registrationNumber");

                entity.HasOne(d => d.User)
                    .WithOne(p => p.Teacher)
                    .HasForeignKey<Teacher>(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("teacher_userId_fkey");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("user");

                entity.HasIndex(e => e.Tc, "user_TC_key")
                    .IsUnique();

                entity.HasIndex(e => e.Email, "user_email_key")
                    .IsUnique();

                entity.HasIndex(e => e.Telephone, "user_telephone_key")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.DepartmentId).HasColumnName("departmentId");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .HasColumnName("email");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(50)
                    .HasColumnName("firstName");

                entity.Property(e => e.LastLogin).HasColumnName("lastLogin");

                entity.Property(e => e.LastName)
                    .HasMaxLength(50)
                    .HasColumnName("lastName");

                entity.Property(e => e.Password)
                    .HasMaxLength(32)
                    .HasColumnName("password");

                entity.Property(e => e.Tc)
                    .HasMaxLength(11)
                    .HasColumnName("TC");

                entity.Property(e => e.Telephone)
                    .HasMaxLength(12)
                    .HasColumnName("telephone");

                entity.HasOne(d => d.Department)
                    .WithMany(p => p.Users)
                    .HasForeignKey(d => d.DepartmentId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("user_departmentId_fkey");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
