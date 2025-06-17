from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import Integer

class Base(DeclarativeBase):
    pass

class GlobalCounter(Base):
    __tablename__ = 'global_counter'

    id: Mapped[int] = mapped_column(Integer, primary_key=True, autoincrement=True)
    value: Mapped[int] = mapped_column(Integer, nullable=False, default=0) 