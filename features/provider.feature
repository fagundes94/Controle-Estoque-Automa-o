Feature: Test of provider

    # Scenario: Registry of Provider with all fields insert successfully
    #     When a provider is registered
    #     Then status is 201
    #     And responce contains an "provider_id"
    
    # Scenario: Registry of provider with only mandatory fileds successfully
    #     When a provider is registered with only mandatory fileds
    #     Then status is 201
    #     And responce contains an "provider_id"


    Scenario: Registering a Provider with a name already registered
        When a provider is informed with the name field already registered
        Then status is 400
        And response is returned: 'supplier already registered'

    # Scenario: Registering a Provider with a CNPJ already registered
    #     When a provider is informed with the CNPJ field already registered
    #     Then status is 400
    #     And response is returned: 'supplier already registered'

    # Scenario: Registry provider whithout name field
    #     When a provider is registred whithout name field
    #     Then status is 400
    #     And response is returned: 'provider field is mandatory'

    # Scenario: Registering a provider exceeding the maximum number of characters in the name field
    #     When a provider is registred exceeding the maximum number of characters in the name field
    #     Then status is 400
    #     And response is returned: 'supplier field must have a maximum of 70 characters.'


