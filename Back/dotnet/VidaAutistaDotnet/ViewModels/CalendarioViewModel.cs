namespace VidaAutistaDotnet.API.ViewModels
{
    public class CalendarioViewModel
    {
        public int Id { get; set; }
        public int IdUsuario { get; set; }
        public string Nome { get; set; }
        public DateTime DataHora { get; set; }
        public string Anotacao { get; set; }
        public string TipoEvento { get; set; }
    }
}
