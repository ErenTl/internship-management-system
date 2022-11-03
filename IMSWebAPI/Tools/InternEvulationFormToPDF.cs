using Aspose.Words;
using Aspose.Words.Saving;
using IMSWebAPI.Models.APIModels;
namespace IMSWebAPI.Tools
{
    public class InternEvulationFormToPDF
    {
        public static void PrintInternAcceptanceForm(InternshipInformationPDF intern, long id)
        {
            string _inputPath = "wwwroot/pdf/internshipform.docx";
            string _outputPath = "wwwroot/pdf/GeneratedEvulationPdfFiles/"+id+".pdf";
            Document doc = new Document(_inputPath);
            DocumentBuilder builder = new DocumentBuilder(doc);

            var date = doc.Sections[0].Body.Paragraphs[2].Runs[0];
            date.Text = "Tarih: " + intern.date;

            var par = doc.Sections[0].Body.Paragraphs[6].Runs[0];
            par.Text = "Teknoloji Fakültesi  " + intern.departmentName + " Bölümü  " + intern.studentNumber + " numaralı öğrencisiyim. Kurumunuzda staj yapmamın uygun görülmesi halinde bu formun alttaki kısmını doldurularak fakültemiz ilgili bölüm başkanlığına gönderilmesini saygılarımla arz ederim.";

            var fullName = doc.Sections[0].Body.Tables[0].Rows[0].Cells[1].FirstParagraph.Runs[0];
            fullName.Text = intern.firstName + " " + intern.lastName;

            var tc = doc.Sections[0].Body.Tables[0].Rows[1].Cells[1].FirstParagraph.Runs[0];
            tc.Text = intern.tc;

            var telephone = doc.Sections[0].Body.Tables[0].Rows[2].Cells[1].FirstParagraph.Runs[0];
            telephone.Text = intern.telephone;

            var email = doc.Sections[0].Body.Tables[0].Rows[2].Cells[3].FirstParagraph.Runs[0];
            email.Text = intern.email;

            var address = doc.Sections[0].Body.Tables[0].Rows[3].Cells[1].FirstParagraph.Runs[0];
            address.Text = intern.address;

            var city = doc.Sections[0].Body.Tables[0].Rows[4].Cells[1].FirstParagraph.Runs[0];
            city.Text = intern.city;

            var district = doc.Sections[0].Body.Tables[0].Rows[4].Cells[2].FirstParagraph.Runs[0];
            district.Text = intern.district;

            var postalCode = doc.Sections[0].Body.Tables[0].Rows[4].Cells[3].FirstParagraph.Runs[0];
            postalCode.Text = intern.postalCode;

            builder.MoveToCell(1, 1, 0, 7);
            builder.InsertCheckBox(string.Empty, false, intern.intern_1, 0);

            builder.MoveToCell(1, 1, 1, 7);
            builder.InsertCheckBox(string.Empty, false, intern.intern_2, 0);

            var startingDate = doc.Sections[0].Body.Tables[1].Rows[2].Cells[0].FirstParagraph.Runs[0];
            startingDate.Text = "Başlama Tarihi: " + intern.startingDate;

            var endingDate = doc.Sections[0].Body.Tables[1].Rows[2].Cells[1].FirstParagraph.Runs[0];
            endingDate.Text = "Bitiş Tarihi: " + intern.endingDate;

            var workDay = doc.Sections[0].Body.Tables[1].Rows[2].Cells[2].FirstParagraph.Runs[0];
            workDay.Text = "İş Günü: " + intern.workDay;

            //first
            builder.MoveToCell(2, 0, 1, 7);
            builder.InsertCheckBox(string.Empty, false, intern.firstQuestion, 0);

            builder.MoveToCell(2, 0, 2, 7);
            builder.InsertCheckBox(string.Empty, false, !intern.firstQuestion, 0);

            //second
            builder.MoveToCell(2, 1, 1, 7);
            builder.InsertCheckBox(string.Empty, false, intern.secondQuestion, 0);

            builder.MoveToCell(2, 1, 2, 7);
            builder.InsertCheckBox(string.Empty, false, !intern.secondQuestion, 0);

            //third
            builder.MoveToCell(2, 2, 1, 7);
            builder.InsertCheckBox(string.Empty, false, intern.thirdQuestion, 0);

            builder.MoveToCell(2, 2, 2, 7);
            builder.InsertCheckBox(string.Empty, false, !intern.thirdQuestion, 0);

            var companyName = doc.Sections[0].Body.Tables[3].Rows[1].Cells[1].FirstParagraph.Runs[0];
            companyName.Text = intern.companyName;

            var companyScope = doc.Sections[0].Body.Tables[3].Rows[2].Cells[1].FirstParagraph.Runs[0];
            companyScope.Text = intern.companyScope;

            var companyAddress = doc.Sections[0].Body.Tables[3].Rows[3].Cells[1].FirstParagraph.Runs[0];
            companyAddress.Text = intern.companyAddress;

            var companyCity = doc.Sections[0].Body.Tables[3].Rows[4].Cells[1].FirstParagraph.Runs[0];
            companyCity.Text = intern.companycity;

            var companyDistrict = doc.Sections[0].Body.Tables[3].Rows[4].Cells[2].FirstParagraph.Runs[0];
            companyDistrict.Text = intern.companyDistrict;

            var companyPostal = doc.Sections[0].Body.Tables[3].Rows[4].Cells[3].FirstParagraph.Runs[0];
            companyPostal.Text = intern.companyPostalCode;

            var companyTel = doc.Sections[0].Body.Tables[3].Rows[5].Cells[1].FirstParagraph.Runs[0];
            companyTel.Text = intern.companyTelephone;

            var companyFax = doc.Sections[0].Body.Tables[3].Rows[5].Cells[2].FirstParagraph.Runs[0];
            companyFax.Text = intern.companyFax;

            var companyMail = doc.Sections[0].Body.Tables[3].Rows[5].Cells[3].FirstParagraph.Runs[0];
            companyMail.Text = intern.companyEmail;

            builder.MoveToCell(3, 6, 1, 10);
            builder.InsertCheckBox(string.Empty, false, intern.engineer, 0);

            builder.MoveToCell(3, 6, 1, 70);
            builder.InsertCheckBox(string.Empty, false, intern.teacher, 0);

            builder.MoveToCell(3, 6, 1, 110);
            builder.InsertCheckBox(string.Empty, false, intern.doctor, 0);

            builder.MoveToCell(3, 7, 0, 100);
            builder.InsertCheckBox(string.Empty, false, intern.companyQuestion, 0);

            builder.MoveToCell(3, 7, 0, 137);
            builder.InsertCheckBox(string.Empty, false, !intern.companyQuestion, 0);


            PdfSaveOptions options = new PdfSaveOptions();
            options.Compliance = PdfCompliance.Pdf17;

            doc.Save(_outputPath, options);

        }
    }
}
