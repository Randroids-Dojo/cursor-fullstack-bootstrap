from sqlalchemy import select
from sqlalchemy.orm import Session

from models import GlobalCounter

def increment_counter(db: Session) -> int:
    """Increments and returns the global counter value."""
    counter = db.scalar(select(GlobalCounter).limit(1))
    if counter is None:
        counter = GlobalCounter(value=0)
        db.add(counter)
        db.flush()
    counter.value += 1
    db.add(counter)
    db.commit()
    db.refresh(counter)
    return counter.value 