export default function contactCard() {
    return(
        <article className="contact-card" key={contact.id}>
            <img src={contact.avatar} alt="" className="contact-avatar" />
            <div className="contact-info">
                <h2 className="contact-name">{contact.name}</h2>
                <p className="contact-details">{contact.accountNumber}</p>
            </div>
        </article>
    )
}