package com.millieandco.acebook;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

//@RepositoryRestResource(exported = false)
public interface PersonRepository extends CrudRepository<Person, Long> {
    List<Person> findAll();

    Person save(Person person);

    Person findByUsername(String username);
}
